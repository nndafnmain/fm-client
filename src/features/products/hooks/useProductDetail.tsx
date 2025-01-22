import { useQuery } from "@tanstack/react-query";
import { productServices } from "../services/productServices";
import type { ProductDetail } from "../types/productDetail.type";

export const useProductDetail = (id: number) => {
	return useQuery<ProductDetail>({
		queryKey: ["productId", id],
		queryFn: () => productServices.fetchProduct(id),
	});
};
