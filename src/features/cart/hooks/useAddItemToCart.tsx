import { useMutation } from "@tanstack/react-query";
import { cartServices } from "../services/cartServices";
import { queryClient } from "@/main";

export const useAddItemToCart = () => {
	return useMutation({
		mutationFn: cartServices.addItemToCart,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cartItems"] });
		},
	});
};
