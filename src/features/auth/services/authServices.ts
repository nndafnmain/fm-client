export const authServices = {
	registerUser: async (formData: {
		username: string;
		email: string;
		password: string;
	}) => {
		const response = await fetch("http://localhost:3000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to register");
		}

		return response.json();
	},
	loginUser: async (formData: {
		email: string;
		password: string;
	}) => {
		const response = await fetch("http://localhost:3000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to login");
		}

		return response.json();
	},
};
