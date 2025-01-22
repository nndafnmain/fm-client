import { API_BASE_URL } from "@/lib/constants";

export const searchServices = {
	fetchItems: async (searchTerm: string, page: number, limit: number) => {
		const response = await fetch(
			`${API_BASE_URL}/products/search?searchTerm=${encodeURIComponent(searchTerm)}&page=${page}&limit=${limit}`,
		);
		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}
		return response.json();
	},
};
