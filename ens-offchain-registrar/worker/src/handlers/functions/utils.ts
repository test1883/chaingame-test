import { Insertable, Selectable } from 'kysely'

import { Contract, ContractInKysely } from '../../models'

type SelectableKysely = Selectable<ContractInKysely>
type InsertableKysely = Insertable<ContractInKysely>

/**
 * Parse `texts` and `addresses` from the database into JSON.
 * @param contract Contract from the database
 */
export function parseContractFromDB(contract: SelectableKysely): Contract
export function parseContractFromDB(contract: SelectableKysely[]): Contract[]
export function parseContractFromDB(
  contract: SelectableKysely | SelectableKysely[]
): Contract | Contract[] {
  if (Array.isArray(contract)) {
    return contract.map(parseContract)
  }

  return parseContract(contract)

  function parseContract(contract: SelectableKysely) {
    return {
      owner: contract.owner,
      contract: contract.contract,
      description: contract.description
    }
  }
}

/**
 * Stringify `texts` and `addresses` from JSON.
 * @param name Contract to be inserted into the database
 */
export function stringifyNameForDb(name: Contract): InsertableKysely
export function stringifyNameForDb(name: Contract[]): InsertableKysely[]
export function stringifyNameForDb(
  name: Contract | Contract[]
): InsertableKysely | InsertableKysely[] {
  if (Array.isArray(name)) {
    return name.map(stringifyName)
  }

  return stringifyName(name)

  function stringifyName(name: Contract) {
    return {
      name: name.name,
      owner: name.owner,
      addresses: name.addresses ? JSON.stringify(name.addresses) : null,
      texts: name.texts ? JSON.stringify(name.texts) : null,
      contenthash: name.contenthash || null,
      updatedAt: new Date().toISOString(),
    }
  }
}
