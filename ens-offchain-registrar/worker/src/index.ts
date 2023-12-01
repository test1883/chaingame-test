import { Router, createCors } from 'itty-router'

import { Env } from './env'
import { getContract, getContracts, getTokens, setContract } from './handlers'
import { createToken } from './handlers/createToken'

const { preflight, corsify } = createCors()
const router = Router()

router
  .all('*', preflight)
  // .get('/lookup/*', (request, env) => getCcipRead(request, env))
  .get('/get/:contract', (request, env) => getContract(request, env))
  .get('/contracts', (request, env) => getContracts(env))
  .post('/set', (request, env) => setContract(request, env))
  .post('/get-tokens', (request, env) => getTokens(request, env))
  .post("/set-token", (request, env) => createToken(request, env))
  .all('*', () => new Response('Not found', { status: 404 }))

// Handle requests to the Worker
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return router.handle(request, env).then(corsify)
  },
}
