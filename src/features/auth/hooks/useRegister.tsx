import { useMutation } from "@tanstack/react-query";
import { authServices } from "../services/authServices";

export const useRegister = () => {
	return useMutation({
		mutationFn: authServices.registerUser,
		onSuccess: (data) => {
			console.log("Registration successful:", data);
			alert("Registration successful!");
		},
		onError: (error) => {
			console.error("Registration failed:", error.message);
			alert(`Registration failed: ${error.message}`);
		},
	});
};
