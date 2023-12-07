import { Env } from '../env'
import { getToken } from './functions/getToken'
import { setTokenInfo } from './functions/setTokenInfo'

export async function buyToken(
  request: {
    owner: string
    receiver: string
    t_index: number
  },
  env: Env
) {
  const token = await getToken(request, env)
  const body = {
    owner: request.owner,
    receiver: request.receiver,
    t_index: request.t_index,
    last_updated: Date.now() / 1000,
    current_link: 0,
    active_till: Date.now() / 1000 + token!.duration,
  }

  const id = await setTokenInfo(body, env)
  return {token, id}
}
