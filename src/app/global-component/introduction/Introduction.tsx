import React from "react";
import VersionInfo from "./VersionInfo";

const Introduction = () => {
	return (
		<div className="w-full relative z-0 my-1">
			<div className="w-full">
				<p className="capitalize text-lg my-3">
					this UI is not for beginners !
				</p>
				<h3 className=" text-black font-semibold my-2">Who is this UI for ?</h3>
				<ol className="grid grid-cols-3 gap-x-4 z-0">
					<li className="p-4 bg-gray-100 rounded-md">
						<span className="block text-black font-medium text-lg mb-2">
							Tailwind CSS Enthusiasts:
						</span>
						<span className="text-gray-700 text-sm">
							This UI is tailored for those who love to write their own CSS
							using Tailwind, offering full control and flexibility without the
							reliance on pre-made styles.
						</span>
					</li>
					<li className="p-4 bg-gray-100 rounded-md">
						<span className="block text-black font-medium text-lg mb-2">
							Avoid Media Queries:
						</span>
						<span className="text-gray-700 text-sm">
							Ideal for developers who prefer not to use traditional media
							queries for responsive design, instead utilizing Tailwind’s
							utility classes for responsiveness.
						</span>
					</li>
					<li className="p-4 bg-gray-100 rounded-md">
						<span className="block text-black font-medium text-lg mb-2">
							Mobile-First Development:
						</span>
						<span className=" text-sm text-gray-700">
							Perfect for those who embrace a mobile-first approach in their
							development process, allowing them to build responsive layouts
							efficiently.
						</span>
					</li>
				</ol>
			</div>
			<VersionInfo />
		</div>
	);
};

export default Introduction;
