// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {CCIPReceiver} from "../../node_modules/@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "../../node_modules/@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {MyNFT} from "./MyNFT.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract DestinationMinter is CCIPReceiver {
    MyNFT nft;

    event MintCallSuccessfull();

    constructor(address router, address nftAddress) CCIPReceiver(router) {
        nft = MyNFT(nftAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        (bool success, ) = address(nft).call(message.data);
        require(success);
        emit MintCallSuccessfull();
    }
}
