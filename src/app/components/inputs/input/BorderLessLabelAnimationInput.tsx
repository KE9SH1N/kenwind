import React from "react";

const BorderLessLabelAnimationInput = () => {
	return (
		<div className="w-full ct-flex-start py-6">
			<label className="w-full relative cursor-pointer">
				<input
					type="text"
					placeholder="Input"
					className="h-12 w-full px-[10px] text-sm text-black border-b border-gray-500 border-opacity-50 outline-none focus:border-sky-600 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
				/>
				<span className="text-md text-black bg-white text-opacity-80 absolute left-3 top-3 px-1 transition duration-200 input-text">
					Input
				</span>
			</label>
		</div>
	);
};

export default BorderLessLabelAnimationInput;
