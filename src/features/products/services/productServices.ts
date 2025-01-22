import { API_BASE_URL } from "@/lib/constants";
import type { ProductDetail } from "../types/productDetail.type";

interface ProductImage {
	imageUrl: string;
}

export interface IProduct {
	id: number;
	productName: string;
	price: number;
	productImages: ProductImage[];
}

interface ApiResponse {
	data: IProduct[];
	totalCount: number;
	totalPages: number;
	currentPage: number;
}

export const productServices = {
	fetchProducts: async (): Promise<ApiResponse> => {
		try {
			const response = await fetch(
				`${API_BASE_URL}/products?page=${1}&limit=${5}`,
			);
			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}
			const result: ApiResponse = await response.json();
			return result;
		} catch (error) {
			console.error("Error fetching products:", error);
			throw error;
		}
	},

	fetchProduct: async (id: number): Promise<ProductDetail> => {
		const response = await fetch(`${API_BASE_URL}/product/${id}`);
		if (!response.ok) {
			throw new Error("Failed to fetch product details");
		}
		return await response.json();
	},
};
