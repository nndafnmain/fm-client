import { API_BASE_URL } from "@/lib/constants";

export const cartServices = {
	fetchCarts: async ({
		page = 1,
		limit = 5,
		userId = 2,
	}: { page: number; limit: number; userId: number }) => {
		try {
			const response = await fetch(
				`${API_BASE_URL}/cart/${userId}?page=${page}&limit=${limit}`,
			);
			if (!response.ok) {
				throw new Error("Failed to fetch cart items!");
			}
			return response.json();
		} catch (error) {
			console.log("Error:", error);
		}
	},
	addItemToCart: async ({
		userId,
		productId,
	}: { productId: number; userId: number }) => {
		try {
			const response = await fetch(`${API_BASE_URL}/cart/add`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userId, productId }),
			});
			if (!response.ok) throw new Error("Failed to add to cart");
			return response.json();
		} catch (error) {
			console.log(error);
		}
	},
	updateQty: async ({
		userId,
		productId,
		quantity,
	}: {
		userId: number;
		productId: number;
		quantity: number;
	}) => {
		const response = await fetch(`${API_BASE_URL}/cart/update`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ userId, productId, quantity }),
		});
		if (!response.ok) {
			throw new Error("Failed to update cart item quantity");
		}
		return response.json();
	},
	removeItem: async ({
		userId,
		productId,
	}: { userId: number; productId: number }) => {
		const response = await fetch(
			`${API_BASE_URL}/cart/delete/${userId}/${productId}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			throw new Error("Failed to remove item from cart");
		}

		return response.json();
	},
};
