import React from "react";

const ButtonBorderBox = () => {
	return (
		<button className="w-[20%] relative bg-gray-800 py-3 px-6 text-sm font-medium capitalize rounded-sm text-white transition-colors before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-gray-700 ">
			border box right
		</button>
	);
};

export default ButtonBorderBox;
