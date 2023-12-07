import { ethers } from 'ethers'

import durin_call from './ccipRead'

interface Token {
  tIndex: number
  destinationChainSelector: number
  receiver: string
  tokenType: number
  interval: number
  price: number
  links: string[]
  onLoop: number
  duration: number
}

export const registerContract = async () => {}
export const createToken = async (
  Chaingame_abi: any,
  signer: ethers.providers.JsonRpcSigner,
  token: Token
) => {
  const iface = new ethers.utils.Interface(Chaingame_abi)
  const price =
    token.tokenType === 0
      ? '0.0001'
      : token.tokenType === 1
      ? (0.0002 * token.links.length).toString()
      : token.tokenType === 2
      ? (0.0002 * (token.duration / token.interval)).toString()
      : '0'
  await durin_call(signer!, {
    to: '0x41b07186f7311f71a3165ff21614059cf2b03446',
    data: iface.encodeFunctionData('createToken', [
      token.tIndex,
      token.destinationChainSelector,
      token.receiver,
      token.tokenType,
      token.interval,
      token.onLoop,
      token.links,
      token.price,
      token.duration,
    ]),
    value: ethers.utils.parseUnits(price, 18)
  })
}
export const buyToken = async (
  Chaingame_abi: any,
  signer: ethers.providers.JsonRpcSigner,
  data: {
    receiver: string,
    t_index: number,
    
  }
) => {}
