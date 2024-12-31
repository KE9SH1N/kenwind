"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import LabelInput from "../input/LabelInput";
import BorderLessLabelAnimationInput from "../input/BorderLessLabelAnimationInput";

const InputLabelBorderless = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const borderlessAnimatedLabelInputTsx = `
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
	`;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<BorderLessLabelAnimationInput />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={borderlessAnimatedLabelInputTsx}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default InputLabelBorderless;
