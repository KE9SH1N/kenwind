import React from "react";

const ButtonLeftFill = () => {
	return (
		<button className="relative border border-gray-800 bg-transparent py-3 px-6 text-sm font-medium capitalize rounded-sm text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:smooth-animation-high before:content-[''] hover:text-white before:hover:scale-x-100 ">
			From Left
		</button>
	);
};

export default ButtonLeftFill;
