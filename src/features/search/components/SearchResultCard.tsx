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
		<Card className="grid grid-cols-4 p-1 border-0">
			<section className="max-w-[56px] max-h-[50px]">
				<div className="overflow-hidden w-full h-full">
					<img
						src={imageUrl ?? "/products/prd1.jpg"}
						alt=""
						className="w-full object-cover h-full"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</div>
			</section>
			<section className="col-span-3">
				<p className="text-base font-semibold">{productName}</p>
				<p className="text-xs text-orange-500">Rp {price}</p>
			</section>
		</Card>
	);
};
