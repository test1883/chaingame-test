import { createKysely } from '../../db/kysely'
import { Env } from '../../env'
import { TokenInfo } from '../../models'

export async function setToken(tokenData: TokenInfo, env: Env) {
  const db = createKysely(env)

  await db.insertInto('tokenInfo').values(tokenData).execute()
}
