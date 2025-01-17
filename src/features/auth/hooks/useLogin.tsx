import { useMutation } from "@tanstack/react-query";
import { authServices } from "../services/authServices";

export const useLogin = () => {
	return useMutation({
		mutationFn: authServices.loginUser,
		onSuccess: (data) => {
			console.log("Login successful:", data);
			alert("Login successful!");
		},
		onError: (error) => {
			console.error("Login failed:", error.message);
			alert(`Login failed: ${error.message}`);
		},
	});
};
