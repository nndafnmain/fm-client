import { Home, Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const navItems = [
	{ icon: Home, label: "Home", path: "/" },
	{ icon: Search, label: "Search", path: "/search" },
	{ icon: ShoppingBag, label: "Cart", path: "/cart" },
	{ icon: User, label: "Profile", path: "/profile" },
];

export const MobileNav = () => {
	return (
		<header className="container space-y-5 p-2 pb-16 shadow-sm h-28">
			{/* TOP NAV */}
			<section className="flex items-center justify-between">
				<div className="flex flex-col gap-1">
					<p className="text-[10px] font-normal text-blue-600">
						Delivery address
					</p>
					<p className="text-xs font-medium text-gray-900">
						Salatiga City, Central Java
					</p>
				</div>
				<div className="flex items-center gap-4">
					<img
						src="/headers/wishlist.svg"
						alt="Wishlist icon"
						width={24}
						height={24}
					/>
					<img
						src="/headers/cart.svg"
						alt="Cart icon "
						width={24}
						height={24}
					/>
				</div>
			</section>
			<section className="flex">
				<Input
					className="h-8 text-xs border-blue-100"
					placeholder="Search for items..."
				/>
			</section>
			{/* BOTTOM NAV */}
			<section className="fixed bottom-0 left-0 right-0 z-0 border p-2 bg-white shadow-md">
				<div className="flex items-center justify-between">
					{navItems.map((item) => (
						<Link
							key={item.label}
							to={item.path}
							className="flex flex-col items-center"
						>
							<item.icon
								className={`h-6 w-6 ${
									location.pathname === item.path
										? "text-blue-600"
										: "text-gray-500"
								}`}
							/>
							<span
								className={`text-xs ${
									location.pathname === item.path
										? "text-blue-500"
										: "text-gray-500"
								}`}
							>
								{item.label}
							</span>
						</Link>
					))}
				</div>
			</section>
		</header>
	);
};
