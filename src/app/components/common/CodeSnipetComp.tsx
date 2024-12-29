"use client";
import React, { useState } from "react";
import { IoCodeOutline, IoCodeSlashOutline } from "react-icons/io5";
import LeftWaveBtn from "../buttons/button/LeftWaveBtn";
import CodeSnipetModal from "../modals/CodeSnipetModal";

const CodeSnipetComp = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const componentCode = `
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white">Component Title</h1>
            <p className="text-gray-600 mt-2">This is a sample component styled with Tailwind CSS.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Click Me
            </button>
        </div>
`;
	return (
		<div className="max-w-xs p-2 bg-gray-100 rounded-lg shadow-lg">
			<div>
				{isOpen ? (
					<div
						onClick={toggleShowCode}
						className="flex items-end justify-end gap-x-4 border-b py-2"
					>
						<span className=" capitalize text-sm">hide code</span>
						<IoCodeSlashOutline className="text-2xl mr-6 text-gray-600 hover:text-blue-500 transition cursor-pointer smooth-animation-mid" />
					</div>
				) : (
					<div
						onClick={toggleShowCode}
						className="flex items-end justify-end gap-x-4 border-b py-2"
					>
						<span className=" capitalize text-sm">show code</span>
						<IoCodeOutline className="text-2xl mr-6 text-gray-600 hover:text-blue-500 transition cursor-pointer smooth-animation-mid" />
					</div>
				)}
			</div>
			<LeftWaveBtn />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={componentCode}
				/>
			)}
		</div>
	);
};

export default CodeSnipetComp;
