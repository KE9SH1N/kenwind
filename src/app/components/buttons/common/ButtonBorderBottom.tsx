"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import ElevatedButton from "../button/ElevatedButton";
import CallToAction from "../button/CallToAction";
import BorderBottom from "../button/BorderBottom";

const ButtonBorderBottom = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const buttonBorderBoxReverseCode = `
        <div className="ct-flex-center w-full sm:w-auto p-4 gap-4 flex-wrap justify-center">
			<button className="w-[80%] py-2 border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 smooth-animation-mid">
				Button 1
			</button>
		</div>
	`;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<BorderBottom />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={buttonBorderBoxReverseCode}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default ButtonBorderBottom;
