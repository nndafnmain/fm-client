export interface ProductImage {
	id: number;
	imageUrl: string;
}

export interface ProductDetail {
	id: number;
	productName: string;
	longDesc: string;
	description: string;
	color: string;
	type: string;
	stock: number;
	weight: number;
	price: number;
	productCategory: string;
	productImages: ProductImage[];
}
