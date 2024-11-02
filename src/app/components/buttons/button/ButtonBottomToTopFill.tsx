import React from "react";

const ButtonBottomToTopFill = () => {
	return (
		<button className="w-[20%] relative border border-gray-800 bg-transparent py-3 px-6 text-sm font-medium capitalize rounded-sm text-yellow-800 transition-colors before:absolute before:left-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left before:scale-y-0 before:bg-gray-800 before:smooth-animation-high before:content-[''] hover:text-white before:hover:scale-y-100">
			Bottom 2 Top
		</button>
	);
};

export default ButtonBottomToTopFill;
