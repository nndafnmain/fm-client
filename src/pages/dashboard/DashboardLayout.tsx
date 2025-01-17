import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/dashboard/components/AppSidebar";
import type React from "react";

export const DashboardLayout = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarTrigger />
			<main className="container h-screen flex justify-center items-center">
				{children}
			</main>
		</SidebarProvider>
	);
};
