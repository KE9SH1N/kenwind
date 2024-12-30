"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "../global-component/sidebar/SideBar";
import NavTop from "../global-component/header/NavTop";

export default function GlobalLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		const token = localStorage.getItem("accessToken");

	// 		if (!token) {
	// 			setIsLoading(true);
	// 			router.push(`/login`);
	// 		} else {
	// 			setIsLoading(false);
	// 		}
	// 	}
	// }, [router]);
	// if (isLoading) {
	// 	return <div>{/* <LoaderEffect /> */}</div>;
	// }

	return (
		<div className=" h-screen flex relative">
			<div
				className={`fixed top-0 left-0 h-full smooth-animation-mid-linear z-50 ${
					isSidebarCollapsed ? "w-16" : "w-60"
				}`}
			>
				<SideBar toggleSidebar={toggleSidebar} />
			</div>

			<div
				className={`flex-1 ${
					isSidebarCollapsed ? "ml-16" : "ml-60"
				} smooth-animation-mid-linear`}
			>
				<div
					className={`fixed top-0 left-0 right-0 bg-white z-40 shadow smooth-animation-mid-linear ${
						isSidebarCollapsed ? "ml-16" : "ml-60"
					}`}
				>
					<NavTop />
				</div>
				{/* <div><PopUpToast /></div> */}
				<div className="pt-16 p-4">{children}</div>
			</div>
		</div>
	);
}
