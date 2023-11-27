import { createKysely } from '../db/kysely'
import { Env } from '../env'
import { parseContractFromDb } from './functions/utils'

export async function getNames(env: Env) {
  const db = createKysely(env)
  const contracts = await db.selectFrom('contracts').selectAll().execute()
  const parsedContracts = parseContractFromDb(contracts)

  return Response.json(parsedContracts, {
    status: 200,
  })
}
