import { createKysely } from '../db/kysely'
import { Env } from '../env'
import { parseContractFromDB } from './functions/utils'

export async function getContracts(env: Env) {
  const db = createKysely(env)
  const contracts = await db.selectFrom('contracts').selectAll().execute()
  const parsedContracts = parseContractFromDB(contracts)

  return Response.json(parsedContracts, {
    status: 200,
  })
}
