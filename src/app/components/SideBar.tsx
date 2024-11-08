"use client";
import React, { useState } from "react";
import { MdOutlineDashboard, MdOutlineDrafts } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {
	FiMessageSquare,
	FiFolder,
	FiShoppingCart,
	FiChevronDown,
	FiSend,
} from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiInboxArchiveLine, RiSettings4Line } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { SiBigbluebutton } from "react-icons/si";
import { FaRegImage } from "react-icons/fa";
import ButtonComponent from "./buttons/ButtonComponent";
import Introduction from "./introduction/Introduction";
import Header from "./header/Header";

const SideBar = () => {
	const menus = [
		{
			name: "Introduction",
			icon: MdOutlineDashboard,
			component: "introduction",
		},
		{
			name: "Component",
			icon: AiOutlineUser,
			submenu: [
				{
					name: "button",
					icon: SiBigbluebutton,
					component: "button",
				},
				{
					name: "Image",
					icon: FaRegImage,
					component: "image",
				},
			],
		},
		{
			name: "messages",
			icon: FiMessageSquare,
			submenu: [
				{
					name: "inbox",
					icon: RiInboxArchiveLine,
					component: "inbox",
				},
				{ name: "sent", icon: FiSend, component: "sent" },
				{
					name: "drafts",
					icon: MdOutlineDrafts,
					component: "drafts",
				},
			],
		},
		{
			name: "analytics",
			icon: TbReportAnalytics,
			margin: true,
			component: "introduction",
		},
		{
			name: "File Manager",
			icon: FiFolder,
			component: "introduction",
		},
		{
			name: "Cart",
			icon: FiShoppingCart,
			component: "introduction",
		},
		{
			name: "Saved",
			icon: AiOutlineHeart,
			margin: true,
			component: "introduction",
		},
		{
			name: "Setting",
			icon: RiSettings4Line,
			component: "introduction",
		},
	];

	const [open, setOpen] = useState(true);
	const [openSubmenu, setOpenSubmenu] = useState(null);
	const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
		<Introduction />
	);

	const toggleMainMenu = () => {
		setOpen(!open);
		setOpenSubmenu(null);
	};

	const toggleSubmenu = (index: any) => {
		setOpenSubmenu((prev) => (prev === index ? null : index));
	};

	const handleMenuClick = (menu: string) => {
		if (menu === "introduction") {
			setActiveComponent(<Introduction />);
		} else if (menu === "button") {
			setActiveComponent(<ButtonComponent />);
		} else {
			setActiveComponent(<Introduction />);
		}
	};

	return (
		<section className="w-full flex">
			<div
				className={`bg-[#0e0e0e] min-h-screen ${
					open ? "w-72" : "w-16 "
				} duration-700 text-gray-100 `}
			>
				<div
					className={`relative py-3  transition-transform duration-700 ${
						open ? "translate-x-[85%]" : "translate-x-[30%]"
					}`}
				>
					<HiMenuAlt3
						size={25}
						className="cursor-pointer"
						onClick={toggleMainMenu}
					/>
				</div>
				<div className="mt-4 flex flex-col gap-4 relative">
					{menus.map((menu, i) => (
						<div key={i}>
							<Link
								href="#"
								onClick={(e) => {
									if (menu.submenu && open) {
										e.preventDefault();
										toggleSubmenu(i);
									} else if (menu.submenu && !open) {
										e.preventDefault();
										setOpen(!open);
										toggleSubmenu(i);
									} else {
										setOpenSubmenu(null);
										if (menu?.component) {
											handleMenuClick(menu?.component);
										}
									}
								}}
								className={`relative ${
									menu.margin && "mt-5"
								} group flex items-center text-sm gap-3.5 font-medium py-2 px-[22px] hover:bg-gray-800 rounded-md`}
							>
								<div>{React.createElement(menu.icon, { size: "20" })}</div>
								<h2
									style={{
										transitionDelay: `${open ? i * 50 : 0}ms`,
									}}
									className={`whitespace-pre duration-700 capitalize flex-grow ${
										!open &&
										"opacity-0 pointer-events-none translate-x-48 overflow-hidden"
									}`}
								>
									{menu.name}
								</h2>

								{menu?.submenu && (
									<FiChevronDown
										className={`transition-transform duration-300 ${
											openSubmenu === i ? "rotate-180" : ""
										}`}
									/>
								)}
								<h2
									style={{ zIndex: 9999 }}
									className={`${
										open && "hidden"
									} capitalize absolute left-48 bg-white font-light whitespace-pre text-yellow-800 rounded-md drop-shadow-lg px-3 py-2 w-fit opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:px-3 group-hover:py-2 group-hover:left-16 group-hover:duration-700 group-hover:w-fit z-50`}
								>
									{menu?.name}
								</h2>
							</Link>

							{menu.submenu && (
								<div
									className={`overflow-hidden transition-[max-height] duration-500 ease-in-out pl-8 ${
										openSubmenu === i ? "max-h-40" : "max-h-0"
									}`}
								>
									{menu.submenu.map((subItem, subIndex) => (
										<Link
											href="#"
											key={subIndex}
											className="flex items-center text-sm gap-3 py-1 px-3 hover:bg-gray-700 rounded-md"
											onClick={(e) => {
												e.preventDefault();
												handleMenuClick(subItem.component);
											}}
										>
											<div>
												{React.createElement(subItem.icon, { size: "16" })}
											</div>
											<span className="text-gray-400 capitalize">
												{subItem.name}
											</span>
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="w-full relative z-50">
				<div className="m-4 text-gray-800">
					<Header />
					{activeComponent}
				</div>
			</div>
		</section>
	);
};

export default SideBar;
