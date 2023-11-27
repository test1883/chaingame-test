// SPDX-License-Identifier: MIT
pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/mimcsponge.circom";

template NFTOwnershipVerifier(levels) {
    signal input ownerAddress;
    signal input tokenId;
    signal input contractAddress; // New input for the contract address
    signal input ownerMerkleRoot; // Root of the Merkle tree containing owner hashes
    signal output isValidOwner;

    // Use MiMC to hash the provided owner address, token ID, and contract address
    component hasher = MiMC(3); // MiMC with 3 input bits
    hasher.in[0] <== ownerAddress;
    hasher.in[1] <== tokenId;
    hasher.in[2] <== contractAddress;

    // Verify if the hashed commitment is part of the Merkle tree
    component merkleTreeVerifier = MerkleTreeVerifier(levels);
    merkleTreeVerifier.root <== ownerMerkleRoot;
    merkleTreeVerifier.leaf <== hasher.out[0]; // Using the hash of owner address, token ID, and contract address as the leaf

    isValidOwner <== merkleTreeVerifier.isValid;
}

// Instantiate the NFTOwnershipVerifier template with a specified number of Merkle tree levels
component main = NFTOwnershipVerifier(20);
