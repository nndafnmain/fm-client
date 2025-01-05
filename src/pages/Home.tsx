import { Banner } from "@/features/home/components/Banner";
import { Category } from "@/features/home/components/Category";
import { MobileNav } from "@/features/home/components/MobileNav";
import { Products } from "@/features/products/components/Products";

export default function Home() {
	return (
		<main className="pb-16">
			<div className="tablet:hidden block">
				<MobileNav />
			</div>
			<Banner />
			<Category />
			<Products />
		</main>
	);
}
