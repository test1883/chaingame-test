import { ColumnType, Generated } from 'kysely'
import z from 'zod'

export const ZodContract = z.object({
  owner: z.string(),
  contract: z.string(),
  description: z.string()
})

export const ZodContractWithSignature = ZodContract.extend({
  signature: z.object({
    hash: z.string(),
    message: z.string(),
  }),
})

export type Contract = z.infer<typeof ZodContract>
export type ContractWithSignature = z.infer<typeof ZodContractWithSignature>

export interface ContractInKysely {
  owner: string
  contract: string
  description: string
}
