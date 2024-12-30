"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import LeftWaveBtn from "../../buttons/button/LeftWaveBtn";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import BottomWaveBtn from "../button/BottomWaveBtn";

const ButtonBottomWaveCard = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const buttonBottomWaveCode = `
        <div className="ct-flex-center gap-4 my-3 z-10 w-full relative">
			<button className="min-w-36 relative text-sm border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left before:scale-y-0 before:bg-gray-800 before:smooth-animation-high before:content-[''] hover:text-white before:hover:scale-y-100">
				from bottom
			</button>
		</div>
	`;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<BottomWaveBtn />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={buttonBottomWaveCode}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default ButtonBottomWaveCard;
