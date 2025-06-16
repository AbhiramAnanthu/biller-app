import { z } from 'zod';


const BillSchema = z.object({
    title: z.string().min(1).optional(),
    issued_date: z.string().min(1).optional(),
    bill_last_date: z.string().min(1).optional(),
    splitup: z.array(
        z.object({
            splitUpLabel: z.string().min(1),
            value: z.number()
        })
    ).optional(),
    total_amount: z.number().optional(),
    recipient_name: z.string().min(1).optional(),
    createdat: z.date().default(new Date()).optional(),
    updatedat: z.date().default(new Date()).optional(),
    category: z.string().min(1).optional(),
    userid: z.string().min(1).optional(),
})

const CategorySchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    createdat: z.date().default(new Date()),
    updatedat: z.date(),
    userid: z.string().min(1),
})

export { BillSchema, CategorySchema }