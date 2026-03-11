import * as z from "zod";

export const loginSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" }) // Message for empty field
    .email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(1, { message: "Password is required" }) // Message for empty field
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginInput = z.infer<typeof loginSchema>;