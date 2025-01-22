import { Button } from "@/components/ui/button";
import { CartCard } from "./CartCard";
import { useGetItems } from "../hooks/useGetItems";
import { R2_PUBLIC_URL } from "@/lib/constants";

export const Carts = () => {
	const { data, error, isLoading } = useGetItems(2, 5, 1);

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

	return (
		<main className="container mt-2 space-y-2">
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
				<Button className="w-full bg-orange-500">Checkout</Button>
			</section>
		</main>
	);
};
