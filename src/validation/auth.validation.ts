import { object, string, TypeOf, date } from "zod";
export const registerUserSchema = object({
    body: object({
        email: string({ required_error: "Should have email" }).email({ message: 'Invalid email address' }),
        password: string({ required_error: "Should have password" }).min(6, { message: 'Password should have at least 6 characters' }),
    })
});

export const loginUserSchema = object({
    body: object({
        email: string({ required_error: "Should have email" }).email({ message: 'Invalid email address' }).optional(),
        password: string({ required_error: "Should have password" }),
    })
});


export type registerUserInput = TypeOf<typeof registerUserSchema>["body"];
export type loginUserInput = TypeOf<typeof loginUserSchema>["body"];
