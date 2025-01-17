import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

export const ProductCard = ({
	name,
	price,
	imageUrl,
}: { name: string; price: string; imageUrl?: string }) => {
	const [rating, setRating] = useState(0);

	const handleRating = (rate: number) => {
		setRating(rate);
	};
	return (
		<Card className="w-[95%] p-0 h-[17.6rem] mx-auto border border-gray-300 rounded-lg shadow-md">
			<CardContent className="p-0 overflow-hidden w-full h-40">
				<img
					src="/products/prd1.jpg"
					alt=""
					className="w-full object-cover h-full"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</CardContent>
			<CardDescription className="space-y-1 p-1">
				<div className="mb-3">
					<p className="text-xs font-bold text-gray-900 truncate overflow-hidden">
						{name}
					</p>
					<p className="text-sm text-orange-500 font-bold">Rp {price}</p>
				</div>
				<div className="flex">
					{[1, 2, 3, 4, 5].map((star) => (
						<Star
							key={star}
							size={14}
							className={`cursor-pointer ${
								star <= rating ? "text-yellow-500" : "text-gray-400"
							}`}
							onClick={() => handleRating(star)}
						/>
					))}
				</div>
			</CardDescription>
			<CardFooter className="max-w-full p-0 mt-4">
				<Button className="w-[97%] mx-auto h-8 rounded-lg bg-blue-600 text-xs">
					Add to cart
				</Button>
			</CardFooter>
		</Card>
	);
};
