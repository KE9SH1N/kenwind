import React from "react";

const ButtonBorderBoxReverse = () => {
	return (
		<button className="w-[20%] relative -top-1 -left-1 bg-gray-800 py-3 px-6 text-sm font-medium capitalize rounded-sm text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
			button Three
		</button>
	);
};

export default ButtonBorderBoxReverse;
