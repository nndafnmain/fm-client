export const productServices = {
	fetchProducts: async () => {
		try {
			const response = await fetch("http://localhost:3000/api/products");
			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}
			const result = await response.json();
			return result || [];
		} catch (error) {
			console.error("Error fetching products:", error);
			return [];
		}
	},
};
