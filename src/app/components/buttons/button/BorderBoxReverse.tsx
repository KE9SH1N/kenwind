import React from "react";

const BorderBoxReverse = () => {
	return (
		<div className="ct-flex-center gap-4 my-3 z-10 w-full relative">
			<button className="min-w-36 relative -top-1 -left-1 text-sm bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
				box reverse
			</button>
		</div>
	);
};

export default BorderBoxReverse;
