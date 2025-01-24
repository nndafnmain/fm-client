import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Banknote, CreditCard, MapPin } from "lucide-react";

export const Checkout = () => {
	return (
		<main className="container">
			<h1 className="text-center text-2xl font-semibold p-5">Checkout</h1>
			<section className="space-y-4 p-2">
				<Separator />
				<div className="flex justify-between">
					<p className="text-base font-semibold">Delivery Address</p>
					<p className="underline text-base font-normal">Change</p>
				</div>
				<div className="flex gap-2">
					<MapPin width={24} height={24} color="gray" />
					<div>
						<p className="text-sm font-semibold">Home</p>
						<p className="text-sm font-normal text-gray-400">
							925 S Chugach St #APT 10, Alaska 99645
						</p>
					</div>
				</div>
				<Separator className="mt-5" />
			</section>
			<section className="my-5">
				<h1 className="text-base font-semibold">Payment method</h1>
				<div className="grid grid-cols-2 gap-2 my-4">
					<Card className="py-4 flex justify-center items-center gap-2">
						<CreditCard />
						<h1>Midtrans</h1>
					</Card>
					<Card className="py-4 flex justify-center items-center gap-2">
						<Banknote />
						<h1>Manual</h1>
					</Card>
				</div>
				<Separator />
			</section>
			<section>
				<h1 className="text-base font-semibold">Detail orders</h1>
				<section className="flex justify-between text-base">
					<div className="space-y-3 mt-4 text-gray-400">
						<p>Sub - total</p>
						<p>VAT</p>
						<p>Shipping fee</p>
						<p>Total</p>
					</div>
					<div className="space-y-3 mt-4">
						<p>Rp 40000</p>
						<p>Rp 40</p>
						<p>Rp 20000</p>
						<p>Rp 40080</p>
					</div>
				</section>
			</section>
			<Separator className="mt-5" />
			<section className="flex gap-2 mt-5">
				<Input className="text-xs h-14" placeholder="Enter promo code.." />
				<Button className="h-14">Add</Button>
			</section>
			<section className="fixed bottom-0 right-0 left-0 z-0 border border-gray-200 bg-white shadow-md p-2">
				<Button className="w-full bg-orange-500">Checkout</Button>
			</section>
		</main>
	);
};
