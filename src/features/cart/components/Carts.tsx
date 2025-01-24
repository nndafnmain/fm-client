import { Button } from "@/components/ui/button";
import { CartCard } from "./CartCard";
import { useGetItems } from "../hooks/useGetItems";
import { API_BASE_URL, MIDTRANS_APP_URL, R2_PUBLIC_URL } from "@/lib/constants";
import { useNavigate } from "react-router-dom";
import { useSnap } from "@/hooks/useSnap";
import { useState } from "react";

export const Carts = () => {
	const { data, error, isLoading } = useGetItems(2, 5, 1);

	const [snapShow, setSnapShow] = useState<boolean>();

	const navigate = useNavigate();

	const { snapEmbed } = useSnap();

	if (isLoading) {
		return <p>Still loading...</p>;
	}

	if (error) {
		return <p>Oops! error!</p>;
	}
	const cartItems = data?.data || [];

	if (cartItems.length === 0) {
		<p>No items in your cart!</p>;
	}

	const payload = {
		userId: 2,
	};

	const pay = async () => {
		const response = await fetch(`${API_BASE_URL}/transaction/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		}).then((res) => res.json());

		console.log("RESPONSE 1:", response.data.snap_token);
		console.log("RESPONSE 2:", response.data.snap_redirect_url);

		if (response && response.status === "success") {
			setSnapShow(true);
			snapEmbed(response.data.snap_token, "snap-container", {
				onSuccess: (result: any) => {
					console.log("success", result);
					setSnapShow(false);
				},
				onPending: (result: any) => {
					console.log("success", result);
					setSnapShow(false);
				},
				onClose: () => {
					console.log("CLOSED");
					setSnapShow(false);
				},
			});
		} else if (response && response.status === "error") {
			alert(response.errors.map((msg: any) => msg.msg).join(", "));
		}
	};

	return (
		<main>
			<div className="container mt-2 space-y-2">
				{!snapShow && (
					<>
						<h1 className="text-xl font-semibold text-center">My Cart</h1>
						<section className="grid grid-cols-1 gap-3">
							{cartItems.map((item: any) => {
								console.log(item.products);
								return (
									<CartCard
										id={item.products.id}
										key={item.products.id}
										imageUrl={`${R2_PUBLIC_URL}/fm-server/product/${item.products.id}/${item.products.productImages[0].imageUrl}`}
										productName={item.products.productName}
										price={item.products.price}
										stock={item.products.stock}
										quantity={item.quantity}
									/>
								);
							})}
						</section>
						<section className="fixed bottom-0 right-0 left-0 z-0 border border-gray-200 bg-white shadow-md p-2">
							<Button className="w-full bg-orange-500" onClick={pay}>
								Checkout
							</Button>
						</section>
					</>
				)}
			</div>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<div id="snap-container" className="w-full h-full"></div>
		</main>
	);
};
