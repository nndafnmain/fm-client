import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
const products = [
	{ title: "Chanise Cabbage Chanise Cabbage Chanise Cabbage", price: "$14.99" },
	{ title: "Fresh Organic Lettuce", price: "$5.49" },
	{ title: "Ripe Avocados", price: "$2.99" },
	{ title: "Gala Apples", price: "$3.99" },
	{ title: "Organic Tomatoes", price: "$6.49" },
	{ title: "Carrots (1 lb)", price: "$1.99" },
	{ title: "Sweet Potatoes", price: "$4.49" },
	{ title: "Cucumbers", price: "$2.29" },
];

export const Products = () => {
	return (
		<main className="container">
			<h1 className="underline decoration-2 decoration-orange-500 my-3">
				Best seller products
			</h1>
			<section className="grid grid-cols-2 gap-5">
				{products.map((product, idx) => {
					return (
						<Link key={idx} to={product.title}>
							<ProductCard name={product.title} price={product.price} />
						</Link>
					);
				})}
			</section>
		</main>
	);
};
