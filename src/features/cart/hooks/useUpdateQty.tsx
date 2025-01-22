import { useMutation } from "@tanstack/react-query";
import { cartServices } from "../services/cartServices";
import { queryClient } from "@/main";

export const useUpdateQty = () => {
	return useMutation({
		mutationFn: cartServices.updateQty,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cartItems"] });
		},
	});
};
