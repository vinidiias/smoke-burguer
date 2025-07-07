import { z } from 'zod'

export const orderSchem = z.object({
    description: z.string(),
    address: z.string().min(5, {
        message: "Endereço deve ter no mínimo 5 caracteres",
    }),
    payment: z.string().min(1, {
        message: 'Selecione uma forma de pagamento'
    })
})