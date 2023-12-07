/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MyNFT,
  MyNFTInterface,
} from "../../../../artifacts/contracts/cross-chain-nft-minter/MyNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "TOKEN_URI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f4d794e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4e46540000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b6131b780620005096000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102a4578063c87b56dd146102c0578063d0def521146102f0578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a22cb465146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611bca565b610358565b6040516101379190611c12565b60405180910390f35b61014861043a565b6040516101559190611cbd565b60405180910390f35b61017860048036038101906101739190611d15565b6104cc565b6040516101859190611d83565b60405180910390f35b6101a860048036038101906101a39190611dca565b610551565b005b6101c460048036038101906101bf9190611e0a565b610668565b005b6101e060048036038101906101db9190611e0a565b6106c8565b005b6101fc60048036038101906101f79190611d15565b6106e8565b6040516102099190611d83565b60405180910390f35b61022c60048036038101906102279190611e5d565b610799565b6040516102399190611e99565b60405180910390f35b61024a610850565b005b6102546108d8565b6040516102619190611d83565b60405180910390f35b610272610902565b60405161027f9190611cbd565b60405180910390f35b6102a2600480360381019061029d9190611ee0565b610994565b005b6102be60048036038101906102b99190612055565b610b14565b005b6102da60048036038101906102d59190611d15565b610b76565b6040516102e79190611cbd565b60405180910390f35b61030a60048036038101906103059190612179565b610cc7565b005b610326600480360381019061032191906121d5565b610d71565b6040516103339190611c12565b60405180910390f35b61035660048036038101906103519190611e5d565b610e05565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610efc565b5b9050919050565b60606000805461044990612244565b80601f016020809104026020016040519081016040528092919081815260200182805461047590612244565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610f66565b610516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050d906122e7565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061055c826106e8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c390612379565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105eb610fd2565b73ffffffffffffffffffffffffffffffffffffffff16148061061a575061061981610614610fd2565b610d71565b5b610659576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106509061240b565b60405180910390fd5b6106638383610fda565b505050565b610679610673610fd2565b82611093565b6106b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106af9061249d565b60405180910390fd5b6106c3838383611171565b505050565b6106e383838360405180602001604052806000815250610b14565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610790576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107879061252f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610809576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610800906125c1565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610858610fd2565b73ffffffffffffffffffffffffffffffffffffffff166108766108d8565b73ffffffffffffffffffffffffffffffffffffffff16146108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c39061262d565b60405180910390fd5b6108d660006113cc565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461091190612244565b80601f016020809104026020016040519081016040528092919081815260200182805461093d90612244565b801561098a5780601f1061095f5761010080835404028352916020019161098a565b820191906000526020600020905b81548152906001019060200180831161096d57829003601f168201915b5050505050905090565b61099c610fd2565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0090612699565b60405180910390fd5b8060056000610a16610fd2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610ac3610fd2565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b089190611c12565b60405180910390a35050565b610b25610b1f610fd2565b83611093565b610b64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5b9061249d565b60405180910390fd5b610b7084848484611492565b50505050565b6060610b8182610f66565b610bc0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb79061272b565b60405180910390fd5b6000600660008481526020019081526020016000208054610be090612244565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0c90612244565b8015610c595780601f10610c2e57610100808354040283529160200191610c59565b820191906000526020600020905b815481529060010190602001808311610c3c57829003601f168201915b505050505090506000610c6a6114ee565b90506000815103610c7f578192505050610cc2565b600082511115610cb4578082604051602001610c9c929190612787565b60405160208183030381529060405292505050610cc2565b610cbd84611505565b925050505b919050565b610ccf610fd2565b73ffffffffffffffffffffffffffffffffffffffff16610ced6108d8565b73ffffffffffffffffffffffffffffffffffffffff1614610d43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3a9061262d565b60405180910390fd5b610d4f826008546115ac565b610d5b600854826115ca565b6008600081548092919060010191905055505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e0d610fd2565b73ffffffffffffffffffffffffffffffffffffffff16610e2b6108d8565b73ffffffffffffffffffffffffffffffffffffffff1614610e81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e789061262d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ef0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee79061281d565b60405180910390fd5b610ef9816113cc565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661104d836106e8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061109e82610f66565b6110dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d4906128af565b60405180910390fd5b60006110e8836106e8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061115757508373ffffffffffffffffffffffffffffffffffffffff1661113f846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b8061116857506111678185610d71565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611191826106e8565b73ffffffffffffffffffffffffffffffffffffffff16146111e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111de90612941565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124d906129d3565b60405180910390fd5b611261838383611637565b61126c600082610fda565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112bc9190612a22565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113139190612a56565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61149d848484611171565b6114a98484848461163c565b6114e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114df90612afc565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061151082610f66565b61154f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154690612b8e565b60405180910390fd5b60006115596114ee565b9050600081511161157957604051806020016040528060008152506115a4565b80611583846117c3565b604051602001611594929190612787565b6040516020818303038152906040525b915050919050565b6115c6828260405180602001604052806000815250611923565b5050565b6115d382610f66565b611612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160990612c20565b60405180910390fd5b806006600084815260200190815260200160002090816116329190612dec565b505050565b505050565b600061165d8473ffffffffffffffffffffffffffffffffffffffff1661197e565b156117b6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611686610fd2565b8786866040518563ffffffff1660e01b81526004016116a89493929190612f13565b6020604051808303816000875af19250505080156116e457506040513d601f19601f820116820180604052508101906116e19190612f74565b60015b611766573d8060008114611714576040519150601f19603f3d011682016040523d82523d6000602084013e611719565b606091505b50600081510361175e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175590612afc565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117bb565b600190505b949350505050565b60606000820361180a576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061191e565b600082905060005b6000821461183c57808061182590612fa1565b915050600a826118359190613018565b9150611812565b60008167ffffffffffffffff81111561185857611857611f2a565b5b6040519080825280601f01601f19166020018201604052801561188a5781602001600182028036833780820191505090505b5090505b60008514611917576001826118a39190612a22565b9150600a856118b29190613049565b60306118be9190612a56565b60f81b8183815181106118d4576118d361307a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856119109190613018565b945061188e565b8093505050505b919050565b61192d8383611991565b61193a600084848461163c565b611979576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197090612afc565b60405180910390fd5b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a00576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119f7906130f5565b60405180910390fd5b611a0981610f66565b15611a49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a4090613161565b60405180910390fd5b611a5560008383611637565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611aa59190612a56565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ba781611b72565b8114611bb257600080fd5b50565b600081359050611bc481611b9e565b92915050565b600060208284031215611be057611bdf611b68565b5b6000611bee84828501611bb5565b91505092915050565b60008115159050919050565b611c0c81611bf7565b82525050565b6000602082019050611c276000830184611c03565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c67578082015181840152602081019050611c4c565b60008484015250505050565b6000601f19601f8301169050919050565b6000611c8f82611c2d565b611c998185611c38565b9350611ca9818560208601611c49565b611cb281611c73565b840191505092915050565b60006020820190508181036000830152611cd78184611c84565b905092915050565b6000819050919050565b611cf281611cdf565b8114611cfd57600080fd5b50565b600081359050611d0f81611ce9565b92915050565b600060208284031215611d2b57611d2a611b68565b5b6000611d3984828501611d00565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d6d82611d42565b9050919050565b611d7d81611d62565b82525050565b6000602082019050611d986000830184611d74565b92915050565b611da781611d62565b8114611db257600080fd5b50565b600081359050611dc481611d9e565b92915050565b60008060408385031215611de157611de0611b68565b5b6000611def85828601611db5565b9250506020611e0085828601611d00565b9150509250929050565b600080600060608486031215611e2357611e22611b68565b5b6000611e3186828701611db5565b9350506020611e4286828701611db5565b9250506040611e5386828701611d00565b9150509250925092565b600060208284031215611e7357611e72611b68565b5b6000611e8184828501611db5565b91505092915050565b611e9381611cdf565b82525050565b6000602082019050611eae6000830184611e8a565b92915050565b611ebd81611bf7565b8114611ec857600080fd5b50565b600081359050611eda81611eb4565b92915050565b60008060408385031215611ef757611ef6611b68565b5b6000611f0585828601611db5565b9250506020611f1685828601611ecb565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611f6282611c73565b810181811067ffffffffffffffff82111715611f8157611f80611f2a565b5b80604052505050565b6000611f94611b5e565b9050611fa08282611f59565b919050565b600067ffffffffffffffff821115611fc057611fbf611f2a565b5b611fc982611c73565b9050602081019050919050565b82818337600083830152505050565b6000611ff8611ff384611fa5565b611f8a565b90508281526020810184848401111561201457612013611f25565b5b61201f848285611fd6565b509392505050565b600082601f83011261203c5761203b611f20565b5b813561204c848260208601611fe5565b91505092915050565b6000806000806080858703121561206f5761206e611b68565b5b600061207d87828801611db5565b945050602061208e87828801611db5565b935050604061209f87828801611d00565b925050606085013567ffffffffffffffff8111156120c0576120bf611b6d565b5b6120cc87828801612027565b91505092959194509250565b600067ffffffffffffffff8211156120f3576120f2611f2a565b5b6120fc82611c73565b9050602081019050919050565b600061211c612117846120d8565b611f8a565b90508281526020810184848401111561213857612137611f25565b5b612143848285611fd6565b509392505050565b600082601f8301126121605761215f611f20565b5b8135612170848260208601612109565b91505092915050565b600080604083850312156121905761218f611b68565b5b600061219e85828601611db5565b925050602083013567ffffffffffffffff8111156121bf576121be611b6d565b5b6121cb8582860161214b565b9150509250929050565b600080604083850312156121ec576121eb611b68565b5b60006121fa85828601611db5565b925050602061220b85828601611db5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061225c57607f821691505b60208210810361226f5761226e612215565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006122d1602c83611c38565b91506122dc82612275565b604082019050919050565b60006020820190508181036000830152612300816122c4565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612363602183611c38565b915061236e82612307565b604082019050919050565b6000602082019050818103600083015261239281612356565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006123f5603883611c38565b915061240082612399565b604082019050919050565b60006020820190508181036000830152612424816123e8565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000612487603183611c38565b91506124928261242b565b604082019050919050565b600060208201905081810360008301526124b68161247a565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000612519602983611c38565b9150612524826124bd565b604082019050919050565b600060208201905081810360008301526125488161250c565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006125ab602a83611c38565b91506125b68261254f565b604082019050919050565b600060208201905081810360008301526125da8161259e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612617602083611c38565b9150612622826125e1565b602082019050919050565b600060208201905081810360008301526126468161260a565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612683601983611c38565b915061268e8261264d565b602082019050919050565b600060208201905081810360008301526126b281612676565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b6000612715603183611c38565b9150612720826126b9565b604082019050919050565b6000602082019050818103600083015261274481612708565b9050919050565b600081905092915050565b600061276182611c2d565b61276b818561274b565b935061277b818560208601611c49565b80840191505092915050565b60006127938285612756565b915061279f8284612756565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612807602683611c38565b9150612812826127ab565b604082019050919050565b60006020820190508181036000830152612836816127fa565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612899602c83611c38565b91506128a48261283d565b604082019050919050565b600060208201905081810360008301526128c88161288c565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b600061292b602983611c38565b9150612936826128cf565b604082019050919050565b6000602082019050818103600083015261295a8161291e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006129bd602483611c38565b91506129c882612961565b604082019050919050565b600060208201905081810360008301526129ec816129b0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a2d82611cdf565b9150612a3883611cdf565b9250828203905081811115612a5057612a4f6129f3565b5b92915050565b6000612a6182611cdf565b9150612a6c83611cdf565b9250828201905080821115612a8457612a836129f3565b5b92915050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612ae6603283611c38565b9150612af182612a8a565b604082019050919050565b60006020820190508181036000830152612b1581612ad9565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612b78602f83611c38565b9150612b8382612b1c565b604082019050919050565b60006020820190508181036000830152612ba781612b6b565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612c0a602e83611c38565b9150612c1582612bae565b604082019050919050565b60006020820190508181036000830152612c3981612bfd565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612ca27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612c65565b612cac8683612c65565b95508019841693508086168417925050509392505050565b6000819050919050565b6000612ce9612ce4612cdf84611cdf565b612cc4565b611cdf565b9050919050565b6000819050919050565b612d0383612cce565b612d17612d0f82612cf0565b848454612c72565b825550505050565b600090565b612d2c612d1f565b612d37818484612cfa565b505050565b5b81811015612d5b57612d50600082612d24565b600181019050612d3d565b5050565b601f821115612da057612d7181612c40565b612d7a84612c55565b81016020851015612d89578190505b612d9d612d9585612c55565b830182612d3c565b50505b505050565b600082821c905092915050565b6000612dc360001984600802612da5565b1980831691505092915050565b6000612ddc8383612db2565b9150826002028217905092915050565b612df582611c2d565b67ffffffffffffffff811115612e0e57612e0d611f2a565b5b612e188254612244565b612e23828285612d5f565b600060209050601f831160018114612e565760008415612e44578287015190505b612e4e8582612dd0565b865550612eb6565b601f198416612e6486612c40565b60005b82811015612e8c57848901518255600182019150602085019450602081019050612e67565b86831015612ea95784890151612ea5601f891682612db2565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612ee582612ebe565b612eef8185612ec9565b9350612eff818560208601611c49565b612f0881611c73565b840191505092915050565b6000608082019050612f286000830187611d74565b612f356020830186611d74565b612f426040830185611e8a565b8181036060830152612f548184612eda565b905095945050505050565b600081519050612f6e81611b9e565b92915050565b600060208284031215612f8a57612f89611b68565b5b6000612f9884828501612f5f565b91505092915050565b6000612fac82611cdf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612fde57612fdd6129f3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061302382611cdf565b915061302e83611cdf565b92508261303e5761303d612fe9565b5b828204905092915050565b600061305482611cdf565b915061305f83611cdf565b92508261306f5761306e612fe9565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006130df602083611c38565b91506130ea826130a9565b602082019050919050565b6000602082019050818103600083015261310e816130d2565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061314b601c83611c38565b915061315682613115565b602082019050919050565b6000602082019050818103600083015261317a8161313e565b905091905056fea2646970667358221220d004ea9fa6b5bb35260720d88dcebaf36fb5c34927b57f5b2baf6e68ece84de764736f6c63430008130033";

type MyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNFTConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNFT__factory extends ContractFactory {
  constructor(...args: MyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<MyNFT> {
    return super.deploy(overrides || {}) as Promise<MyNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyNFT {
    return super.attach(address) as MyNFT;
  }
  override connect(signer: Signer): MyNFT__factory {
    return super.connect(signer) as MyNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNFTInterface {
    return new utils.Interface(_abi) as MyNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyNFT {
    return new Contract(address, _abi, signerOrProvider) as MyNFT;
  }
}
