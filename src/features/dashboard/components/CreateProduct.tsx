import React from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Menus = "VEGGIES" | "FRUITS" | "MEAT" | "FISH" | "SNACKS" | "DRINKS";

const menus: Menus[] = [
	"VEGGIES",
	"FRUITS",
	"MEAT",
	"FISH",
	"SNACKS",
	"DRINKS",
];

const formSchema = z.object({
	email: z.string().email({
		message: "Email must be an email.",
	}),
	password: z.string().nonempty().min(6, {
		message: "Password should be minimal 6 characters!",
	}),
});

export const CreateProduct = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<main className="space-y-2 h-[90%]">
			<h1 className="font-bold text-3xl">Create product</h1>
			<div className="border border-gray-300 p-3 rounded-lg shadow-md h-full">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 grid grid-cols-2"
					>
						{/* grid 1 */}
						<div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Product name</FormLabel>
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
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Short description</FormLabel>
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
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Your product's description"
												className="h-52"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="grid grid-cols-2 gap-2">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<FormControl>
												<Select>
													<SelectTrigger className="">
														<SelectValue placeholder={menus[0]} />
													</SelectTrigger>
													<SelectContent>
														{menus.map((menu, idx) => {
															return (
																<SelectItem value={menu} key={idx}>
																	{menu}
																</SelectItem>
															);
														})}
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Weight</FormLabel>
											<FormControl>
												<Input placeholder="3 kg" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Price</FormLabel>
											<FormControl>
												<Input placeholder="3 g" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Stock</FormLabel>
											<FormControl>
												<Input placeholder="100 pcs" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Type</FormLabel>
											<FormControl>
												<Input placeholder="100 pcs" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Color</FormLabel>
											<FormControl>
												<Input placeholder="100 pcs" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						{/* end grid 1 */}
						{/* grid 2 */}
						<div>
							<section className="flex flex-col items-center p-2">
								<img
									src="/products/prd1.jpg"
									alt="product"
									className="w-[80%]"
								/>
							</section>
						</div>
						{/* end grid 2 */}
					</form>

					<Button className="w-full mt-10 bg-blue-700">+ Create product</Button>
				</Form>
			</div>
		</main>
	);
};
