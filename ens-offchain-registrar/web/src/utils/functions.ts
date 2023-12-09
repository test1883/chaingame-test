import { ethers } from 'ethers'

import durin_call from './ccipRead'

interface Token {
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

export const getPrice = async (Chaingame_abi: any, tokenType: number, duration: number, interval: number, nLinks: number, signer: ethers.providers.JsonRpcSigner) => {
  const contract = new ethers.Contract("0xDDf58125Eb138FD3Ec6B667479674CFAd59eA356", Chaingame_abi, signer)
  const price = await contract.getBalance(tokenType, duration, interval, nLinks)
  return ethers.utils.formatEther(price)
}

export const getBalance = async (Chaingame_abi: any, address: string, signer: ethers.providers.JsonRpcSigner) => {
  const contract = new ethers.Contract("0xDDf58125Eb138FD3Ec6B667479674CFAd59eA356", Chaingame_abi, signer)
  const balance = await contract.getBalance(address)
  return ethers.utils.formatEther(balance)
} 

export const createToken = async (
  Chaingame_abi: any,
  signer: ethers.providers.JsonRpcSigner,
  token: Token,
) => {
  const iface = new ethers.utils.Interface(Chaingame_abi)
  const price = await getPrice(Chaingame_abi, token.tokenType, token.duration, token.interval, token.links.length, signer)
  await durin_call(signer!, {
    to: '0xDDf58125Eb138FD3Ec6B667479674CFAd59eA356',
    data: iface.encodeFunctionData('createToken', [
      token.destinationChainSelector,
      token.receiver,
      token.tokenType,
      token.interval,
      token.onLoop,
      token.links,
      token.price,
      token.duration,
    ]),
    value: ethers.utils.parseUnits(price, 18),
  })
}

export const buyToken = async (
  Chaingame_abi: any,
  signer: ethers.providers.JsonRpcSigner,
  data: {
    receiver: string
    t_index: number
  }
) => {}
