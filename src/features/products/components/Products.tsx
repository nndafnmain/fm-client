import { R2_PUBLIC_URL } from "@/lib/constants";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import type { IProduct } from "../services/productServices";
import { ProductCard } from "./ProductCard";

export const Products = () => {
	const { data, error, isLoading } = useProducts();

	console.log("PRODUCTS", data);

	if (error) {
		return <p>Error</p>;
	}

	if (isLoading) {
		return <p>Loading</p>;
	}

	const products = data?.data || [];

	if (products.length === 0) {
		return <p>No products available</p>;
	}

	return (
		<main className="">
			<h1 className="p-2 underline decoration-2 decoration-orange-500 my-3">
				Best seller products
			</h1>
			<section className="grid grid-cols-2 gap-1">
				{products?.map((product: IProduct) => {
					console.log("IMAGE URL", product.productImages[0].imageUrl);

					return (
						<Link key={product.id} to={`/product/${product.id}`}>
							<ProductCard
								id={product.id}
								name={product.productName}
								price={product.price}
								imageUrl={`${R2_PUBLIC_URL}/fm-server/product/${product.id}/${product.productImages[0].imageUrl}`}
							/>
						</Link>
					);
				})}
			</section>
		</main>
	);
};
