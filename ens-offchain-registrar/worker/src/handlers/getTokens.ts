import { IRequest } from 'itty-router'

import { createKysely } from '../db/kysely'
import { Env } from '../env'
import { ZodToken } from '../models'

export async function getTokens(request: IRequest, env: Env) {
  const body = await request.json()
  const safeParse = ZodToken.safeParse(body)

  if (!safeParse.success) {
    const response = { success: false, error: safeParse.error }
    return Response.json(response, { status: 400 })
  }

  const { receiver } = safeParse.data

  const db = createKysely(env)
  const tokens = await db
    .selectFrom('tokens')
    .selectAll()
    .where('receiver', '=', receiver)
    .execute()

  return Response.json(tokens, {
    status: 200,
  })
}
