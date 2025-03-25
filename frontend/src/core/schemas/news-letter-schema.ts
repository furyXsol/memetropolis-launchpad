import { z } from 'zod'

export const newsLetterSchema = z.object({
  email: z.string().email(),
})
export type NewsLetterSchema = z.infer<typeof newsLetterSchema>
