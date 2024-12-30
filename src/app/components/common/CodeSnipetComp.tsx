"use client";
import React from "react";
import { IoCodeOutline, IoCodeSlashOutline } from "react-icons/io5";

interface CodeSnipetProps {
	isOpen?: any;
	toggleShowCode?: () => void;
	children: React.ReactNode;
}

const CodeSnipetComp: React.FC<CodeSnipetProps> = ({
	isOpen,
	toggleShowCode,
	children,
}) => {
	return (
		<div className="max-w-xs p-2 bg-gray-100 rounded-lg shadow-lg">
			<div>
				{isOpen ? (
					<div className="flex items-end justify-end gap-x-4 border-b py-2">
						<span className=" capitalize text-sm">hide code</span>
						<IoCodeSlashOutline
							onClick={toggleShowCode}
							className="text-2xl mr-6 text-gray-600 hover:text-blue-500 transition cursor-pointer smooth-animation-mid"
						/>
					</div>
				) : (
					<div className="flex items-end justify-end gap-x-4 border-b py-2">
						<span className=" capitalize text-sm">show code</span>
						<IoCodeOutline
							onClick={toggleShowCode}
							className="text-2xl mr-6 text-gray-600 hover:text-blue-500 transition cursor-pointer smooth-animation-mid"
						/>
					</div>
				)}
			</div>

			<div>{children}</div>
		</div>
	);
};

export default CodeSnipetComp;
