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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateProduct } from "../hooks/useCreateProduct";

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
	productName: z.string({
		message: "Product's title has to be string or char",
	}),
	description: z.string(),
	longDesc: z.string(),
	color: z.string(),
	type: z.string(),
	price: z.number(),
	stock: z.number().min(0),
	weight: z.number().min(1),
	productCategory: z.string(),
	files: z
		.instanceof(FileList)
		.refine((file) => file.length > 0, "At least 1 product image!"),
});

export const CreateProduct = () => {
	const [previewImage, setPreviewImage] = useState();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			productName: "",
			description: "",
			color: "",
			longDesc: "",
			price: 0,
			weight: 1,
			productCategory: menus[0],
			stock: 0,
			type: "",
		},
	});

	const { mutate } = useCreateProduct();

	function onSubmit(values: z.infer<typeof formSchema>) {
		const formData = new FormData();

		// biome-ignore lint/complexity/noForEach: <explanation>
		Object.entries(values).forEach(([key, value]) => {
			if (key === "files") {
				// biome-ignore lint/complexity/noForEach: <explanation>
				Array.from(value as FileList).forEach((file) =>
					formData.append("files", file),
				);
			} else {
				formData.append(key, String(value));
			}
		});

		// biome-ignore lint/style/useConst: <explanation>
		for (let pair of formData.entries()) {
			console.log(`${pair[0]}: ${pair[1]}`);
		}

		mutate(formData, {
			onSuccess: (data) => {
				console.log("Product created:", data);
			},
			onError: (error) => {
				console.error("Error creating product:", error);
			},
		});
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
						{/* Grid 1 */}
						<div>
							<FormField
								control={form.control}
								name="productName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Product name</FormLabel>
										<FormControl>
											<Input
												placeholder="Chocolate matcha"
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
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Short description</FormLabel>
										<FormControl>
											<Input
												placeholder="This is great premium chocolate"
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
								name="longDesc"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Your product's description"
												{...field}
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
									name="productCategory"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<FormControl>
												<Select
													onValueChange={(value) => field.onChange(value)}
													defaultValue={menus[0]}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select category" />
													</SelectTrigger>
													<SelectContent>
														{menus.map((menu, idx) => (
															<SelectItem value={menu} key={idx}>
																{menu}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="weight"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Weight</FormLabel>
											<FormControl>
												<Input
													placeholder="3 kg"
													{...field}
													onChange={(e) =>
														field.onChange(Number(e.target.value))
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Price</FormLabel>
											<FormControl>
												<Input
													placeholder="Rp 50.000"
													{...field}
													onChange={(e) =>
														field.onChange(Number(e.target.value))
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="stock"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Stock</FormLabel>
											<FormControl>
												<Input
													placeholder="100 pcs"
													{...field}
													onChange={(e) =>
														field.onChange(Number(e.target.value))
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Type</FormLabel>
											<FormControl>
												<Input placeholder="Organic chocolate" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="color"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Color</FormLabel>
											<FormControl>
												<Input placeholder="Black" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						{/* End Grid 1 */}
						{/* Grid 2 */}
						<div>
							<section className="flex flex-col items-center p-2">
								{/* Preview Image */}
								<img
									src={previewImage || "/products/prd1.jpg"}
									alt="product"
									className="w-[80%]"
								/>
								<FormField
									control={form.control}
									name="files"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Select images</FormLabel>
											<FormControl>
												<Input
													placeholder="Select images"
													type="file"
													multiple
													accept="image/*"
													onChange={(e) => {
														const files = e.target.files;
														field.onChange(files);

														// Update preview image
														// biome-ignore lint/complexity/useOptionalChain: <explanation>
														if (files && files[0]) {
															const reader = new FileReader();
															reader.onload = () =>
																setPreviewImage(reader.result);
															reader.readAsDataURL(files[0]);
														}
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</section>
						</div>
						{/* End Grid 2 */}
						<Button className="w-full mt-10 bg-blue-700" type="submit">
							+ Create product
						</Button>
					</form>
				</Form>
			</div>
		</main>
	);
};
