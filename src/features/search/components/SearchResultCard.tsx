import { Card } from "@/components/ui/card";
import type React from "react";

interface ISearchResult {
	productName: string;
	price: number;
	imageUrl: string;
}

export const SearchResultCard: React.FC<ISearchResult> = ({
	imageUrl,
	price,
	productName,
}) => {
	return (
		<Card className="w-[100%] h-[65px] p-3 flex items-center">
			<section className="grid grid-cols-3">
				<section className="max-h-20">
					<div className="overflow-hidden w-[90%] h-[53px]">
						<img
							src={imageUrl ?? "/products/prd1.jpg"}
							alt={productName}
							className="w-full object-cover h-full"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
				</section>
				<section className="flex flex-col gap-2">
					<p className="text-sm font-semibold text-gray-900">
						{productName ?? "Product name"}
					</p>
					<p className="text-sm font-semibold text-orange-500">
						{price ?? "Rp 50000"}
					</p>
				</section>
			</section>
		</Card>
	);
};
