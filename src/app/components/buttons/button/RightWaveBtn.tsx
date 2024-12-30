import React from "react";

const RightWaveBtn = () => {
	return (
		<div className="ct-flex-center gap-4 my-3 z-10 w-full relative">
			<button className="min-w-36 relative text-sm border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase rounded-sm text-gray-800 transition-colors before:absolute before:right-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-right before:scale-x-0 before:bg-gray-800 before:smooth-animation-high before:content-[''] hover:text-white before:hover:scale-x-100">
				From right
			</button>
		</div>
	);
};

export default RightWaveBtn;
