import React from "react";

const LeftWaveBtn = () => {
	return (
		<div className="ct-flex-center gap-4 my-3 z-10 w-full relative">
			<button className="relative text-sm border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
				Button one
			</button>
		</div>
	);
};

export default LeftWaveBtn;
