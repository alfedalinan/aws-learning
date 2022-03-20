import * as z from "zod";

export const UserSchema = z.object({
    id: z.number(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    password: z.string().nonempty(),
    access: z.string().optional()
});

export type User = z.infer<typeof UserSchema>;

