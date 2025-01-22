import { API_BASE_URL } from "@/lib/constants";

export const productServices = {
	createProudct: async (formData: FormData) => {
		try {
			const response = await fetch(`${API_BASE_URL}/product/upload`, {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});
			if (!response.ok) {
				const errorDetails = await response.json();
				console.error("Error details from server:", errorDetails);
				throw new Error(`Failed to create product: ${response.statusText}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Error in createProduct:", error.message);
			throw error;
		}
	},
};
