import { createKysely } from '../../db/kysely'
import { Env } from '../../env'
import { Token } from '../../models'
import { stringifyTokenForDb } from './utils'

export async function setToken(tokenData: Token, env: Env) {
  const db = createKysely(env)
  const body = stringifyTokenForDb(tokenData)
  console.log(JSON.stringify(body))
  await db.insertInto('tokens').values(body).execute()
  const max = await db.selectFrom('tokens').select(eb => eb.fn.max('t_index').as('id')).executeTakeFirst()
  return max?.id
}
