import { Outlet } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";

export default function Dashboard() {
	return (
		<main>
			<DashboardLayout>
				<Outlet />
			</DashboardLayout>
		</main>
	);
}
