// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../../node_modules/@openzeppelin/contracts/access/Ownable.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MyNFT is ERC721URIStorage, Ownable {
    uint256 internal tokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address to, string memory TOKEN_URI) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }
}
