import { z } from 'zod'

export const signUptimeSchema = z.object({
        name: z
        .string({
            error: 'O noem precisa ser um texto'
    })
    .min(3, {error: 'O nome precisa ter no mínimo 3 caracteres'})
    .nonempty({ error: 'O nome é obrigatório'}),
    email: z.email({ error: "Insira um email válido"})
    .nonempty({error: "O e-mail é obrigatório"}),

    password: z
    .string({error: "A senha precisa ser um texto"})
    .min(6, { error: 'A senha precisa ter ao mínimo 6 caracteres'})
    .nonempty({ error: "A senha é obrigatória"}),

    confirmPassword: z
    .string({error: "A senha precisa ser um texto"})
    .min(6, { error: 'A senha de confirmação precisa ter ao mínimo 6 caracteres'})
    .nonempty({ error: "A confirmação de senha é obrigatória"})

    .nonempty({ error: "A confirmação de senha é obrigatória"}),

})
.refine((data) => data.password === data.confirmPassword, {
    error: "As senhas não são iguais",
    path:["confirmPassword"],
})
.transform((data) => ({
    name: data.name,
    email: data.email,
    password: data.password,
  }));