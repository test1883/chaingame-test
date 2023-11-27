// SPDX-License-Identifier: MIT
pragma circom 2.0.0;

// Include necessary components and libraries
include "../node_modules/circomlib/circuits/mimcsponge.circom";

template MerkleTreeVerifier(levels) {
    signal input root;
    signal input leaf;
    signal output isValid;

    // Define signals for Merkle path elements and indices
    signal input pathElements[levels];
    signal input pathIndices[levels];

    // Use MiMC to hash the leaf and path elements during the verification process
    for (var i = 0; i < levels; i++) {
        var isLeftChild = (pathIndices[i] % 2 == 0);
        leaf = isLeftChild
            ? mimc(leaf, pathElements[i])
            : mimc(pathElements[i], leaf);
    }

    // Final check if the computed leaf matches the provided Merkle tree root
    isValid <== (leaf == root);
}

// Instantiate the MerkleTreeVerifier template with a specified number of levels
component main = MerkleTreeVerifier(20);
