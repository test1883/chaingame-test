import type { IRequest } from 'itty-router'
import zod from 'zod'

import { Env } from '../env'
import { get } from './functions/get'

export async function getContract(request: IRequest, env: Env) {
  const schema = zod.object({
    contract: zod.string(),
  })
  const safeParse = schema.safeParse(request.params)

  if (!safeParse.success) {
    const response = { error: safeParse.error }
    return Response.json(response, { status: 400 })
  }

  const { contract } = safeParse.data
  const contractData = await get(contract, env)

  if (contractData === null) {
    return new Response('contract not found', { status: 404 })
  }

  return Response.json(contractData, {
    status: 200,
  })
}
