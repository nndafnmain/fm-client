import { useQuery } from "@tanstack/react-query";
import { productServices } from "../services/productServices";

export const useProducts = () => {
	return useQuery({
		queryKey: ["products"],
		queryFn: productServices.fetchProducts,
		staleTime: 1000 * 60 * 5,
	});
};
