import { Server } from '@ensdomains/ccip-read-cf-worker'
import { ethers } from 'ethers'
import { Result } from 'ethers/lib/utils'

import { abi as Gateway_abi } from '../abi/Gateway.json'
import { Env } from '../env'
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
          index,
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
        // Hash and sign the response
        let messageHash = ethers.utils.solidityKeccak256(
          ['address', 'uint256'],
          [receiver, index]
        )
        let messageHashBinary = ethers.utils.arrayify(messageHash)
        const sig = await signer.signMessage(messageHashBinary)
        console.log(sig)
        const safeParse = ZodToken.parse({
          t_index: Number(index),
          receiver: receiver,
          token_type: tokenType,
          interval: Number(interval),
          links: links,
          on_loop: Number(onLoop),
          destination_chain_selector: Number(destinationChainSelector),
          price: Number(price),
          duration: Number(duration),
        })
        console.log(JSON.stringify(safeParse))
        await setToken(safeParse, env)
        return [sig]
      },
    },
  ])
  return server
}

export function makeApp(privateKey: string, path: string, env: Env) {
  return makeServer(privateKey, env).makeApp(path)
}
