import { useMutation } from "@tanstack/react-query";
import { productServices } from "../services/productServices";
import { queryClient } from "@/main";

export const useCreateProduct = () => {
	return useMutation({
		mutationFn: productServices.createProudct,
		onSuccess: (data) => {
			console.log("Registration successful:", data);
			queryClient.invalidateQueries({ queryKey: ["products"] });
			alert("Registration successful!");
		},
		onError: (error) => {
			console.error("Registration failed:", error.message);
			alert(`Registration failed: ${error.message}`);
		},
	});
};
