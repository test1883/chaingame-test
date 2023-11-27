import { Insertable, Selectable } from 'kysely'

import { Contract, ContractInKysely } from '../../models'

type SelectableKysely = Selectable<ContractInKysely>
type InsertableKysely = Insertable<ContractInKysely>

/**
 * Parse `texts` and `addresses` from the database into JSON.
 * @param flatName Contract from the database
 */
export function parseNameFromDb(flatName: SelectableKysely): Contract
export function parseNameFromDb(flatName: SelectableKysely[]): Contract[]
export function parseNameFromDb(
  flatName: SelectableKysely | SelectableKysely[]
): Contract | Contract[] {
  if (Array.isArray(flatName)) {
    return flatName.map(parseName)
  }

  return parseName(flatName)

  function parseName(name: SelectableKysely) {
    return {
      name: name.name,
      owner: name.owner,
      addresses: name.addresses ? JSON.parse(name.addresses) : undefined,
      texts: name.texts ? JSON.parse(name.texts) : undefined,
      contenthash: name.contenthash || undefined,
      createdAt: name.createdAt,
      updatedAt: name.updatedAt,
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
