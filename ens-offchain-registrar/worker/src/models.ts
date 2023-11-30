import z from 'zod'

export const ZodContract = z.object({
  owner: z.string(),
  contract: z.string(),
  description: z.string(),
  avatar: z.string()
})

export const ZodContractWithSignature = ZodContract.extend({
  signature: z.object({
    hash: z.string(),
    message: z.string(),
  }),
})

export const ZodToken = z.object({
  t_index: z.number(),
  receiver: z.string(),
  tokenType: z.number(),
  interval: z.number(),
  links: z.record(z.string()),
  onLoop: z.boolean(),
  destinationChainSelector: z.bigint(),
  price: z.number(),
  duration: z.number(),
})

export const ZodTokenWithSignature = ZodToken.extend({
  signature: z.object({
    hash: z.string(),
    message: z.string(),
  }),
})

export const ZodTokenInfo = z.object({
  t_index: z.number(),
  tokenIndex: z.number(),
  owner: z.string(),
  lastUpdated: z.number(),
  currentLink: z.number(),
  activeTill: z.number(),
})

export const ZodTokenInfoWithSignature = ZodToken.extend({
  signature: z.object({
    hash: z.string(),
    message: z.string(),
  }),
})

export type Contract = z.infer<typeof ZodContract>
export type ContractWithSignature = z.infer<typeof ZodContractWithSignature>
export type Token = z.infer<typeof ZodToken>
export type TokenWithSignature = z.infer<typeof ZodTokenWithSignature>
export type TokenInfo = z.infer<typeof ZodTokenInfo>
export type TokenInfoWithSignature = z.infer<typeof ZodTokenInfoWithSignature>

export interface ContractInKysely {
  owner: string
  contract: string
  description: string
}

export interface TokenInKysely {
  t_index: number
  receiver: string
  tokenType: number
  interval: number
  links: string
  onLoop: boolean
  destinationChainSelector: bigint
  price: number
  duration: number
}

export interface TokenInfoInKysely {
  t_index: number
  tokenIndex: number
  owner: string
  lastUpdated: number
  currentLink: number
  activeTill: number
}
