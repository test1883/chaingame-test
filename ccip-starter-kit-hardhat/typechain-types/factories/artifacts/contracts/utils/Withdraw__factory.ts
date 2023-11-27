/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Withdraw,
  WithdrawInterface,
} from "../../../../artifacts/contracts/utils/Withdraw";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610083576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161007a90610298565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610107576101068161010f60201b60201c565b5b505050610324565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361017d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017490610304565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b600061028260188361023b565b915061028d8261024c565b602082019050919050565b600060208201905081810360008301526102b181610275565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006102ee60178361023b565b91506102f9826102b8565b602082019050919050565b6000602082019050818103600083015261031d816102e1565b9050919050565b610a36806103336000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633aeac4e11461005c57806351cff8d91461007857806379ba5097146100945780638da5cb5b1461009e578063f2fde38b146100bc575b600080fd5b61007660048036038101906100719190610697565b6100d8565b005b610092600480360381019061008d91906106d7565b6101e2565b005b61009c6102a6565b005b6100a661043b565b6040516100b39190610713565b60405180910390f35b6100d660048036038101906100d191906106d7565b610464565b005b6100e0610478565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161011b9190610713565b602060405180830381865afa158015610138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015c9190610764565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b81526004016101999291906107a0565b6020604051808303816000875af11580156101b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dc9190610801565b50505050565b6101ea610478565b600047905060008273ffffffffffffffffffffffffffffffffffffffff16826040516102159061085f565b60006040518083038185875af1925050503d8060008114610252576040519150601f19603f3d011682016040523d82523d6000602084013e610257565b606091505b50509050806102a1573383836040517f9d11f56300000000000000000000000000000000000000000000000000000000815260040161029893929190610874565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032d90610908565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61046c610478565b61047581610508565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fd90610974565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056d906109e0565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061066482610639565b9050919050565b61067481610659565b811461067f57600080fd5b50565b6000813590506106918161066b565b92915050565b600080604083850312156106ae576106ad610634565b5b60006106bc85828601610682565b92505060206106cd85828601610682565b9150509250929050565b6000602082840312156106ed576106ec610634565b5b60006106fb84828501610682565b91505092915050565b61070d81610659565b82525050565b60006020820190506107286000830184610704565b92915050565b6000819050919050565b6107418161072e565b811461074c57600080fd5b50565b60008151905061075e81610738565b92915050565b60006020828403121561077a57610779610634565b5b60006107888482850161074f565b91505092915050565b61079a8161072e565b82525050565b60006040820190506107b56000830185610704565b6107c26020830184610791565b9392505050565b60008115159050919050565b6107de816107c9565b81146107e957600080fd5b50565b6000815190506107fb816107d5565b92915050565b60006020828403121561081757610816610634565b5b6000610825848285016107ec565b91505092915050565b600081905092915050565b50565b600061084960008361082e565b915061085482610839565b600082019050919050565b600061086a8261083c565b9150819050919050565b60006060820190506108896000830186610704565b6108966020830185610704565b6108a36040830184610791565b949350505050565b600082825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b60006108f26016836108ab565b91506108fd826108bc565b602082019050919050565b60006020820190508181036000830152610921816108e5565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b600061095e6016836108ab565b915061096982610928565b602082019050919050565b6000602082019050818103600083015261098d81610951565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006109ca6017836108ab565b91506109d582610994565b602082019050919050565b600060208201905081810360008301526109f9816109bd565b905091905056fea264697066735822122006cab02f95d7be6ee3d2025485d9a1d73fb43fefbeb904fe27cf14b6df3d794364736f6c63430008130033";

type WithdrawConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Withdraw__factory extends ContractFactory {
  constructor(...args: WithdrawConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Withdraw> {
    return super.deploy(overrides || {}) as Promise<Withdraw>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Withdraw {
    return super.attach(address) as Withdraw;
  }
  override connect(signer: Signer): Withdraw__factory {
    return super.connect(signer) as Withdraw__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawInterface {
    return new utils.Interface(_abi) as WithdrawInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Withdraw {
    return new Contract(address, _abi, signerOrProvider) as Withdraw;
  }
}
