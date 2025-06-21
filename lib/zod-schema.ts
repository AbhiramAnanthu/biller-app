import { z } from "zod"

export const CategorySchema = z.object({
    name: z.string().min(1),
    ownerid: z.string().min(1)
})

export const TagSchema = z.object({
    name: z.string().min(1),
    categoryId: z.string().min(1),
})