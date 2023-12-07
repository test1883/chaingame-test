import { createKysely } from '../../db/kysely'
import { Env } from '../../env'
import { TokenInfo } from '../../models'

export async function setTokenInfo(tokenData: TokenInfo, env: Env) {
  const db = createKysely(env)

  await db.insertInto('tokenInfo').values(tokenData).execute()
  const max = await db
    .selectFrom('tokenInfo')
    .select((eb) => eb.fn.max('token_index').as('id'))
    .executeTakeFirst()
  return max?.id
}
