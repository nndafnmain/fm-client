import { useMutation } from "@tanstack/react-query";
import { cartServices } from "../services/cartServices";
import { queryClient } from "@/main";

export const useRemoveItem = () => {
	return useMutation({
		mutationFn: cartServices.removeItem,
		onMutate: async ({ productId }) => {
			// Cancel ongoing fetches for the cart
			await queryClient.cancelQueries({ queryKey: ["cartItems"] });

			// Snapshot the current state
			const previousCartItems = queryClient.getQueryData(["cartItems"]);

			// Optimistically update the cache
			queryClient.setQueryData(["cartItems"], (old: any) => {
				return old?.filter((item: any) => item.productId !== productId);
			});

			// Return snapshot for rollback
			return { previousCartItems };
		},
		onError: (err, variables, context) => {
			// Rollback to the previous state if mutation fails
			queryClient.setQueryData(["cartItems"], context?.previousCartItems);
		},
		onSettled: () => {
			// Always refetch the cart after mutation
			queryClient.invalidateQueries({ queryKey: ["cartItems"] });
		},
	});
};
