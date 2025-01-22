import { useQuery } from "@tanstack/react-query";
import { searchServices } from "../services/searchServices";

export const useSearchProducts = (
	searchTerm: string,
	page: number,
	limit: number,
) => {
	return useQuery({
		queryKey: ["searchProducts", searchTerm, page, limit],
		queryFn: () => searchServices.fetchItems(searchTerm, page, limit),
	});
};
