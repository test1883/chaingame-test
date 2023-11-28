import { createKysely } from '../../db/kysely'
import { Env } from '../../env'
import { Token } from '../../models'
import { stringifyTokenForDb } from './utils'

export async function setToken(tokenData: Token, env: Env) {
  const db = createKysely(env)
  const body = stringifyTokenForDb(tokenData)

  await db.insertInto('tokens').values(body).execute()
}
