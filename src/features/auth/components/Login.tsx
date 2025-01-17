import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import type { LoginSchema } from "../schemas/login.schema";
import { loginSchema } from "../schemas/login.schema";
import { FormHeader } from "./FormHeader";

export const Login = () => {
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const mutation = useLogin();

	function onSubmit(values: LoginSchema) {
		mutation.mutate(values);
	}

	return (
		<main className="container space-y-5 mt-1">
			<FormHeader
				mainTitle="Login to your account"
				childTitle="It's great to see you again"
			/>
			<section className="space-y-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="palmer@chelsea.com"
											{...field}
											className="text-xs"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="*****" {...field} className="text-xs" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<p className="text-sm font-medium w-[98%] text-orange-400">
							By signing up you agree to our
							<span className="underline">Terms, Privacy Policy,</span> and
							<span className="underline"> Cookie Use</span>
						</p>
						<Button type="submit" className="w-full p-4 bg-blue-600">
							Login
						</Button>
					</form>
				</Form>
			</section>
			<div className="flex items-center gap-4 w-full">
				<Separator className="flex-1" />
				<span className="text-sm text-muted-foreground">Or</span>
				<Separator className="flex-1" />
			</div>
			<div className="space-y-4">
				<Button type="submit" className="w-full p-4 bg-gray-900">
					Create an Account
				</Button>
				<Button type="submit" className="w-full p-4 bg-blue-700">
					Create an Account
				</Button>
			</div>
			<div>
				<p className="text-sm text-center p-5">
					<span className="text-gray-400">Don’t have an account? </span>
					Join
				</p>
			</div>
		</main>
	);
};
