import { CamelCasePlugin, Kysely } from 'kysely'
import { D1Dialect } from 'kysely-d1'

import { Env } from '../env'
import { ContractInKysely } from '../models'

export interface Database {
  contracts: ContractInKysely
}

export function createKysely(env: Env): Kysely<Database> {
  return new Kysely<Database>({
    dialect: new D1Dialect({ database: env.DB }),
    plugins: [new CamelCasePlugin()],
  })
}
