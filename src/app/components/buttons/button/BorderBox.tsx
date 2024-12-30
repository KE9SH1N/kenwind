import React from "react";

const BorderBox = () => {
	return (
		<div className="ct-flex-center gap-4 my-3 z-10 w-full relative">
			<button className="min-w-36 relative bg-gray-800 text-sm py-2.5 px-5 font-medium uppercase text-white transition-colors before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:smooth-animation before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-gray-700">
				Border Box
			</button>
		</div>
	);
};

export default BorderBox;
