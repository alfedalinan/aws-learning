import * as z from "zod";

export const UserSchema = z.object({
    email: z.string().nonempty(),
    password: z.string().optional(),
    access: z.array(z.string())
})

export type User = z.infer<typeof UserSchema>;