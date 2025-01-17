import { z } from "zod";

export const registerSchema = z
	.object({
		username: z.string().min(2, {
			message: "Username must be at least 2 characters.",
		}),
		email: z.string().email({
			message: "Email must be an email.",
		}),
		password: z.string().nonempty().min(6, {
			message: "Password should be minimal 6 characters!",
		}),
		confirmPassword: z.string().min(6, {
			message: "Password should be minimal 6 characters!",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password doesn't match!",
		path: ["confirmPassword"],
	});

export type RegisterSchema = z.infer<typeof registerSchema>;
