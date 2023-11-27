// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

import {Withdraw} from "./utils/Withdraw.sol";
import {FunctionsConsumer} from "./FunctionsConsumer.sol";

contract SourceMinter is Withdraw, FunctionsConsumer, AutomationCompatibleInterface {
    enum PayFeesIn {
        Native,
        LINK
    }
    enum TokenType {
        Random,
        Interval,
        Static,
    }
    struct Token {
        uint256 tokenId;
        address owner;
        address receiver;
        TokenType tokenType;
        uint256 interval;
        string links[];
        bool onLoop;
        uint256 currLink;
        uint256 lastUpdated;
        uint64 destinationChainSelector;
    }

    address immutable i_router;
    address immutable i_link;

    uint64 f_subscriptionId;

    mapping(address => bool) private registered;

    address[] private contracts;

    mapping(address => Token[]) private tokens;

    event MessageSent(bytes32 messageId);

    constructor(address router, address link, address f_router, bytes32 donId, uint64 subscriptionId) FunctionsConsumer(f_router, donId) {
        i_router = router;
        i_link = link;
        f_subscriptionId = subscriptionId;
        LinkTokenInterface(i_link).approve(i_router, type(uint256).max);
    }

    receive() external payable {}

    function mint(
        uint64 destinationChainSelector,
        address receiver,
        uint256 tokenId,
        TokenType currTokenType,
        uint256 interval,
        bool onLoop,
        string memory links[]
    ) external {
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encodeWithSignature("mint(address, string)", msg.sender, links[0]),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: i_link
        });

        uint256 fee = IRouterClient(i_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;

        messageId = IRouterClient(i_router).ccipSend(
            destinationChainSelector,
            message
        );

        Token currToken = Token(
            tokenId,
            msg.sender,
            receiver,
            currTokenType,
            interval,
            links,
            onLoop,
            0,
            block.timestamp,
            destinationChainSelector
        );
        tokens[receiver].push(currToken);
        if (registered[receiver] == false) {
            registered[receiver] = false;
            contracts.push(receiver);
        } 
        emit MessageSent(messageId);
    }
    function checkUpkeep(bytes memory) public view override returns (bool upkeepNeeded, bytes memory) {
        address[] _contracts = contracts;
        for (uint256 i = 0; i < _contracts.length; i++) {
            Token[] _tokens = Tokens[_contracts[i]];
            for (uint256 j = 0; j < _tokens.length; j++) {
                Token token = _tokens[j];
                if (token.currTokenType !== TokenType.Static) {
                    upkeepNeeded = (block.timestamp - token.lastUpdated) > token.interval;
                    performData = abi.encode(_contracts[i], j);
                    return (upkeepNeeded, performData);
                }
            }
        }
    }
    function performUpkeep(bytes calldata performData) external override {
        (address memory currContract, uint256 memory currTokenId) = abi.decode(
            performData,
            (address, uint256)
        );
        Token currToken = tokens[currContract][currTokenId];
        if (currToken.tokenType.Interval && ((currToken.currLink < currToken.links.length) || (currToken.onLoop))) {
            Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
                receiver: abi.encode(currContract),
                data: abi.encodeWithSignature("setTokenURI(uint256, string)", token.tokenId, currToken.links[(++currToken.currLink)%(currToken.links.length)]),
                tokenAmounts: new Client.EVMTokenAmount[](0),
                extraArgs: "",
                feeToken: i_link
            });
        }

        uint256 fee = IRouterClient(i_router).getFee(
            currToken.destinationChainSelector,
            message
        );

        bytes32 messageId;

        messageId = IRouterClient(i_router).ccipSend(
            currToken.destinationChainSelector,
            message
        );
        tokens[currContract][currTokenId] = currToken;
    }
}
