import { Card } from "@/components/ui/card";
import { useDebounce } from "@/lib/useDebounce";
import { Minus, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRemoveItem } from "../hooks/useRemoveItem";
import { useUpdateQty } from "../hooks/useUpdateQty";

interface ICartCard {
	id?: number;
	productName: string;
	price: number;
	stock: number;
	quantity?: number;
	imageUrl?: string;
}

export const CartCard: React.FC<ICartCard> = ({
	id,
	productName,
	imageUrl,
	price,
	stock,
	quantity,
}) => {
	const [quantityx, setQuantity] = useState<number>(Number(quantity));
	const updateItemQty = useUpdateQty();
	const removeItem = useRemoveItem();
	const debouncedQuantity = useDebounce(quantityx, 500);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (debouncedQuantity !== quantity) {
			if (debouncedQuantity <= 0) {
				removeItem.mutate({ userId: 2, productId: Number(id) });
			} else {
				updateItemQty.mutate({
					userId: 2,
					productId: Number(id),
					quantity: debouncedQuantity,
				});
			}
		}
	}, [debouncedQuantity]);

	const handleIncrement = () => {
		if (!updateItemQty.isLoading && quantityx < stock) {
			setQuantity((prev) => prev + 1);
		}
	};

	const handleDecrement = () => {
		if (!updateItemQty.isLoading) {
			setQuantity((prev) => Math.max(prev - 1, 0));
		}
	};

	return (
		<Card className="w-[100%] h-[107px] p-3 flex items-center justify-between">
			<section className="flex gap-5">
				<section className="max-w-[83px] max-h-20">
					<div className="overflow-hidden w-full h-20">
						<img
							src={imageUrl ?? "/products/prd1.jpg"}
							alt=""
							className="w-full object-cover h-full"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
				</section>
				<section className="flex flex-col gap-2">
					<p className="text-sm font-semibold text-gray-900">
						{productName ?? "Product name"}
					</p>
					<p className="text-xs font-normal text-gray-500">
						Stock: {stock ?? "Product stock"}
					</p>
					<p className="text-sm font-semibold text-orange-500">
						Rp {price ?? "Product price"}
					</p>
				</section>
			</section>
			<section className="h-[90%] w-[25%] flex flex-col justify-between">
				<div className="flex justify-end">
					<Trash
						width={16}
						height={16}
						color="red"
						onClick={() =>
							removeItem.mutate({ userId: 2, productId: Number(id) })
						}
					/>
				</div>
				<div className="flex justify-between items-center gap-2">
					<Plus width={16} height={16} color="blue" onClick={handleIncrement} />
					<p className="text-xs font-semibold">{quantityx ?? 0}</p>
					<Minus
						width={16}
						height={16}
						color="blue"
						onClick={handleDecrement}
					/>
				</div>
			</section>
		</Card>
	);
};
