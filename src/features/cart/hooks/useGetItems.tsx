import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { cartServices } from "../services/cartServices";

export const useGetItems = (userId: number, limit: number, page: number) => {
	return useQuery({
		queryKey: ["cartItems", userId, page, limit],
		queryFn: () =>
			cartServices.fetchCarts({ userId: userId, limit: limit, page: page }),
		placeholderData: keepPreviousData,
	});
};
