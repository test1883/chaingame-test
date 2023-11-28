import { verifyMessage } from 'ethers/lib/utils'
import { IRequest } from 'itty-router'

import { Env } from '../env'
import { ZodToken } from '../models'
import { get } from './functions/get'
import { setToken } from './functions/setToken'

export async function createToken(
  request: IRequest,
  env: Env
): Promise<Response> {
  const body = await request.json()
  const safeParse = ZodToken.safeParse(body)

  if (!safeParse.success) {
    const response = { success: false, error: safeParse.error }
    return Response.json(response, { status: 400 })
  }

  const { receiver } = safeParse.data
  const contract = await get(receiver, env)

  // Validate signature
  // try {
  //   const signer = verifyMessage(signature.message, signature.hash)
  //   if (signer.toLowerCase() !== contract.owner.toLowerCase()) {
  //     throw new Error('Invalid signer')
  //   }
  // } catch (err) {
  //   console.error(err)
  //   const response = { success: false, error: err }
  //   return Response.json(response, { status: 401 })
  // }

  // Save the Contract
  try {
    await setToken(safeParse.data, env)
    const response = { success: true }
    return Response.json(response, { status: 201 })
  } catch (err) {
    console.error(err)
    const response = { success: false, error: 'Error creating token' }
    return Response.json(response, { status: 500 })
  }
}
