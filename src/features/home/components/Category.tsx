import { Link } from "react-router-dom";

const categories = [
	{
		img: "/categories/frt.svg",
		title: "Fruits",
		to: "/",
	},
	{
		img: "/categories/vgt.svg",
		title: "Veggies",
		to: "/",
	},
	{
		img: "/categories/meat.svg",
		title: "Meat",
		to: "/",
	},
	{
		img: "/categories/sncks.svg",
		title: "Snacks",
		to: "/",
	},
	{
		img: "/categories/fish.svg",
		title: "Fish",
		to: "/",
	},
	{
		img: "/categories/wnd.svg",
		title: "Drinks",
		to: "/",
	},
	{
		img: "/categories/sncks.svg",
		title: "Snacks",
		to: "/",
	},
	{
		img: "/categories/wnd.svg",
		title: "Drinks",
		to: "/",
	},
];

export const Category = () => {
	return (
		<article className="mt-5 space-y-3">
			<h1 className="container underline decoration-2 decoration-orange-500">
				Shop by category
			</h1>
			<section className="grid grid-cols-4 gap-4">
				{categories.map((category, idx) => {
					return (
						<Link key={idx} to={category.to} className="mx-auto">
							<img
								src={category.img}
								alt={category.title}
								className="w-12 h-12"
							/>
							<p className="text-[0.73rem] text-center">{category.title}</p>
						</Link>
					);
				})}
			</section>
		</article>
	);
};
