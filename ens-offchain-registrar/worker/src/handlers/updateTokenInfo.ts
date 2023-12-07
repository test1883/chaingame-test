import { ethers } from 'ethers'

import Gateway_abi from '../abi/Gateway.json'
import { createKysely } from '../db/kysely'
import { Env } from '../env'

export async function updateTokenInfo(
  request: { bytesArgs: ethers.utils.BytesLike },
  env: Env
) {
  const db = createKysely(env)
  const iface = new ethers.utils.Interface(Gateway_abi.abi)
  const { sender, currContract, currTokenIndex } = iface.decodeFunctionData(
    'updateToken',
    request.bytesArgs
  )
  //address owner,address receiver, uint256 currTokenId, string memory link, uint256 destChain
  await db
    .updateTable('tokenInfo')
    .set((eb) => ({
      curr_link: eb('curr_link', '+', 1),
      last_updated: Date.now() / 1000,
    }))
    .where('token_index', '=', currTokenIndex)
    .executeTakeFirst()
  const tokenInfo = await db
    .selectFrom('tokenInfo')
    .selectAll()
    .where('token_index', '=', currTokenIndex)
    .where('receiver', '=', currContract)
    .executeTakeFirst()
  const token = await db
    .selectFrom('tokens')
    .selectAll()
    .where('t_index', '=', tokenInfo?.t_index)
    .where('receiver', '=', currContract)
    .executeTakeFirst()
}
