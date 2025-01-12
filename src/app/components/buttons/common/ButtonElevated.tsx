"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import BorderBox from "../button/BorderBox";
import BorderBoxReverse from "../button/BorderBoxReverse";
import ElevatedButton from "../button/ElevatedButton";

const ButtonElevated = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const buttonBorderBoxReverseCode = `
        <div className="ct-flex-center w-full sm:w-auto p-4">
			<Link
				href=""
				className="ct-flex-center flex-row max-w-[90%] px-4 py-3 text-sm bg-green-300 leading-6 capitalize shadow cursor-pointer focus:outline-none hover:shadow-lg hover:-translate-y-1 smooth-animation"
			>
				Elevated Button
				<span className="ml-4">
					<TiArrowRight className=" text-2xl" />
				</span>
			</Link>
		</div>
	`;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<ElevatedButton />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={buttonBorderBoxReverseCode}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default ButtonElevated;
