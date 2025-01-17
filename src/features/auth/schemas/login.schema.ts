import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email({
		message: "Email must be an email.",
	}),
	password: z.string().nonempty().min(6, {
		message: "Password should be minimal 6 characters!",
	}),
});

export type LoginSchema = z.infer<typeof loginSchema>;
