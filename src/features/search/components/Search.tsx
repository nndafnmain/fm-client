import { useDebounce } from "@/lib/useDebounce";
import { useForm } from "react-hook-form";
import { useSearchProducts } from "../hooks/useSearchProducts";
import { Input } from "@/components/ui/input";
import { SearchResultCard } from "./SearchResultCard";
import { R2_PUBLIC_URL } from "@/lib/constants";

export const Search = () => {
	const { register, watch } = useForm({
		defaultValues: { searchTerm: "" },
	});

	const searchTerm = watch("searchTerm");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const { data, isError, isLoading } = useSearchProducts(
		debouncedSearchTerm,
		1,
		5,
	);

	return (
		<main className="container space-y-3 mt-4">
			<h1 className="text-center text-2xl font-semibold">Search</h1>
			<section>
				<Input
					placeholder="search for items..."
					className="w-[100%] text-xs"
					{...register("searchTerm")}
					type="text"
				/>
			</section>
			<section>
				{isLoading && <p>Loading...</p>}
				{isError && <p>Failed to fetch products</p>}
			</section>
			<section>
				<p>Result:</p>
				{data?.data && (
					<div className="grid grid-cols-1 gap-2">
						{data.data.map((product: any) => (
							<div key={product.id}>
								<SearchResultCard
									productName={product.productName}
									price={product.price}
									imageUrl={`${R2_PUBLIC_URL}/fm-server/product/${product.id}/${product.productImages[0].imageUrl}`}
								/>
							</div>
						))}
					</div>
				)}
			</section>
		</main>
	);
};
