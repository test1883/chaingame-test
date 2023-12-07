import { Server } from '@ensdomains/ccip-read-cf-worker'
import { ethers } from 'ethers'
import { Result } from 'ethers/lib/utils'

import { abi as Gateway_abi } from '../abi/Gateway.json'
import { Env } from '../env'
import { buyToken } from '../handlers/functions/buyToken'
import { setToken } from '../handlers/functions/setToken'
import { ZodToken } from '../models'

export function makeServer(privateKey: string, env: Env) {
  let signer = new ethers.Wallet(privateKey)
  const server = new Server()
  server.add(Gateway_abi, [
    {
      type: 'createToken',
      func: async (args: Result) => {
        const [
          destinationChainSelector,
          receiver,
          tokenType,
          interval,
          onLoop,
          links,
          price,
          duration,
        ] = args
        console.log(args)

        const safeParse = ZodToken.parse({
          receiver: receiver,
          token_type: tokenType,
          interval: Number(interval),
          links: links,
          on_loop: Number(onLoop),
          destination_chain_selector: Number(destinationChainSelector),
          price: Number(price),
          duration: Number(duration),
        })

        const id = await setToken(safeParse, env)
        // Hash and sign the response
        let messageHash = ethers.utils.solidityKeccak256(
          ['address', 'uint256'],
          [receiver, id]
        )
        let messageHashBinary = ethers.utils.arrayify(messageHash)
        const sig = await signer.signMessage(messageHashBinary)
        console.log(sig)

        console.log(JSON.stringify(safeParse))
        return [id, sig]
      },
    },
    {
      type: 'buyToken',
      func: async (args: Result) => {
        const [owner, receiver, index] = args
        const { token, id } = await buyToken(
          { owner, receiver, t_index: index },
          env
        )
        // Hash and sign the response
        let messageHash = ethers.utils.solidityKeccak256(
          ['address', 'uint256'],
          [receiver, id]
        )
        let messageHashBinary = ethers.utils.arrayify(messageHash)
        const sig = await signer.signMessage(messageHashBinary)
        return [
          token?.destination_chain_selector,
          token?.links,
          token?.on_loop,
          token?.duration! + Date.now() / 1000,
          id,
          sig,
          token?.token_type,
          token?.interval,
        ]
      },
    },
  ])
  return server
}

export function makeApp(privateKey: string, path: string, env: Env) {
  return makeServer(privateKey, env).makeApp(path)
}
