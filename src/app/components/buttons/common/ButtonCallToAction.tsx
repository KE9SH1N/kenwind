"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import ElevatedButton from "../button/ElevatedButton";
import CallToAction from "../button/CallToAction";

const ButtonCallToAction = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const buttonBorderBoxReverseCode = `
        <div className="ct-flex-center dark:text-white w-full sm:w-auto p-4">
			<Link
				className="group ct-flex-center h-min ring-none hover:opacity-95 disabled:opacity-50 py-2 px-4 font-dm focus:outline-none !ring-transparent text-violet-800 border border-violet-500 border-b-violet-400 border-b-4 hover:border active:border bg-white hover:text-violet-900 hover:bg-gray-50 active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900 dark:text-white"
				href=""
			>
				<IoPlay className="text-xl" />
				<span className="ml-3">Watch demo</span>
			</Link>
		</div>
	`;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<CallToAction />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={buttonBorderBoxReverseCode}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default ButtonCallToAction;
