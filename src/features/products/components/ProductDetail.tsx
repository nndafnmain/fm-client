import { Star } from "lucide-react";
import ImageDetail from "./ImageDetail";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const images = [
	"/products/prd1.jpg",
	"/products/prd2.jpg",
	"/products/prd1.jpg",
];

export const ProductDetail = () => {
	const [rating, setRating] = useState(0);

	const handleRating = (rate: number) => {
		setRating(rate);
	};

	return (
		<main className="grid grid-cols-1 space-y-3 pb-16">
			<section>
				<ImageDetail images={images} autoPlay={false} />
			</section>
			<section className="container space-y-4">
				<p className="text-xl font-semibold text-gray-900">Chinese Cabbage</p>
				<div className="flex">
					{[1, 2, 3, 4, 5].map((star) => (
						<Star
							key={star}
							size={14}
							className={`cursor-pointer ${
								star <= rating ? "text-green-600" : "text-gray-400"
							}`}
							onClick={() => handleRating(star)}
						/>
					))}
				</div>
				<div className="font-normal flex gap-3">
					<p className="text-gray-300 line-through text-sm">Rp 100.000</p>
					<p className="text-green-600 text-sm font-semibold">Rp 50.000</p>
					<p className="text-red-600 rounded-full bg-red-300 text-[9px] p-1">
						50% off
					</p>
				</div>
				<div className="space-y-1">
					<h1 className="text-sm font-semibold text-blue-700">
						Product information
					</h1>
					<p className="text-[0.70rem] text-gray-500">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
						ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
					</p>
				</div>
				<div className="space-y-1">
					<div className="text-xs">
						<span className="font-semibold">Category:</span>{" "}
						<span className="text-gray-500">Vegetables</span>
					</div>
					<p className="text-xs">
						<span className="font-semibold">Tags:</span>{" "}
						<span className="text-gray-500">Vegetables, chinese, health</span>
					</p>
				</div>
			</section>
			<section className="container space-y-2">
				<p className="text-sm font-semibold">Description</p>
				<p className="text-xs text-gray-500">
					Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
					posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
					vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
					porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
					Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
					et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
					scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
					commodo quis, egestas elementum leo. Donec convallis mollis enim.
					Aliquam id mi quam. Phasellus nec fringilla elit. Nulla mauris tellus,
					feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus
					elementum tincidunt, turpis mi viverra velit, pellentesque tristique
					neque mi eget nulla. Proin luctus elementum neque et pharetra. Sed
					commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere
					ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum
					pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor
					vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem
					ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et
					condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque
					vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis,
					egestas elementum leo. Donec convallis mollis enim. Aliquam id mi
					quam. Phasellus nec fringilla elit. Nulla mauris tellus, feugiat quis
					pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum
					tincidunt, turpis mi viverra velit, pellentesque tristique neque mi
					eget nulla. Proin luctus elementum neque et pharetra.
				</p>
			</section>
			<section className="container space-y-3">
				<p className="font-semibold text-sm">Customer feedbacks</p>
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarImage
							src="https://github.com/shadcn.png"
							className="w-10 h-10"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<p className="text-sm font-semibold">Enzo Jr Fernandez</p>
						<div className="flex">
							{[1, 2, 3, 4, 5].map((star) => (
								<Star
									key={star}
									size={12}
									className={`cursor-pointer ${
										star <= rating ? "text-green-600" : "text-gray-400"
									}`}
									onClick={() => handleRating(star)}
								/>
							))}
						</div>
					</div>
				</div>
				<p className="text-[0.72rem] mt-3 text-gray-800">
					200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO
					Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok
					Choi, from USA
				</p>
			</section>
			<section className="fixed bottom-0 right-0 left-0 z-0 border border-gray-200 bg-white shadow-md p-2">
				<Button className="w-full bg-orange-500">+ Add to cart</Button>
			</section>
		</main>
	);
};
