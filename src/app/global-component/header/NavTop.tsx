"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getInitialHeadingText } from "@/app/lib/InitialHeadingText";
import SectionHead from "../common/SectionHead";

const NavTop = () => {
	const pathname = usePathname();
	const [headingText, setHeadingText] = useState(getInitialHeadingText(null));

	useEffect(() => {
		setHeadingText(getInitialHeadingText(pathname));
	}, [pathname]);
	return (
		<nav className="w-full">
			<div className="w-full ct-flex-between px-5 pr-20 bg-slate-100 shadow-md">
				<SectionHead headingText={headingText} />
				<div className="w-[10%]">If Any</div>
			</div>
		</nav>
	);
};

export default NavTop;
