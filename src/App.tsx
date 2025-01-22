import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateProduct } from "./features/dashboard/components/CreateProduct";
import { ProductDetail } from "./features/products/components/ProductDetail";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { Carts } from "./features/cart/components/Carts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth/register" element={<RegisterPage />} />
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="/cart" element={<Carts />} />
				<Route path="/admin/dashboard" element={<Dashboard />}>
					<Route index element={<h1>Dashboard Home</h1>} />
					<Route path="products" element={<h1>Products</h1>} />
					<Route path="products/create" element={<CreateProduct />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
