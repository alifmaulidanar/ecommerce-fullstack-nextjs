import { z } from 'zod';

export const schemaSignIn = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string({ required_error: "Password is required" }).min(5, { message: "Password must be at least 5 characters" }),
});

export const schemaCategory = z.object({
  name: z.string({ required_error: "Name is required" }).min(4, { message: "Name must be at least 4 characters" }),
});

export const schemaLocation = z.object({
  name: z.string({ required_error: "Name is required" }).min(4, { message: "Name must be at least 4 characters" }),
});