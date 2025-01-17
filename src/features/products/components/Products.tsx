import { data, Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
// const products = [
// 	{ title: "Chanise Cabbage Chanise Cabbage Chanise Cabbage", price: "$14.99" },
// 	{ title: "Fresh Organic Lettuce", price: "$5.49" },
// 	{ title: "Ripe Avocados", price: "$2.99" },
// 	{ title: "Gala Apples", price: "$3.99" },
// 	{ title: "Organic Tomatoes", price: "$6.49" },
// 	{ title: "Carrots (1 lb)", price: "$1.99" },
// 	{ title: "Sweet Potatoes", price: "$4.49" },
// 	{ title: "Cucumbers", price: "$2.29" },
// ];

interface IProduct {
	id: number;
	productName: string;
	price: string;
	imageUrl: string;
}

export const Products = () => {
	const { data, error, isLoading } = useProducts();

	console.log("PRODUCTS", data.data);

	if (error) {
		return <p>Error</p>;
	}

	if (isLoading) {
		return <p>Loading</p>;
	}
	return (
		<main className="">
			<h1 className="p-2 underline decoration-2 decoration-orange-500 my-3">
				Best seller products
			</h1>
			<section className="grid grid-cols-2 gap-1">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{data?.map((product: IProduct, idx: any) => {
					return (
						<Link key={idx} to={""}>
							<ProductCard
								name={product.productName}
								price={product.price}
								// imageUrl={`${process.env.R2_PUBLIC_URL}/fm-server/product/${product.id}`}
								// imageUrl="https://pub-11f58ea63bad46d7bcb2e93933f7c6bb.r2.dev/fm-server/product/14/amikom-logo.png"
							/>
						</Link>
					);
				})}
			</section>
		</main>
	);
};
