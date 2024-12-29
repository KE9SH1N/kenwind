import React from "react";

interface SectionHeadingProps {
	headingText?: string | React.ReactNode;
}

const SectionHead: React.FC<SectionHeadingProps> = ({ headingText }) => {
	return (
		<div className="my-3">
			<h2 className=" text-xl font-semibold  uppercase">{headingText}</h2>
		</div>
	);
};

export default SectionHead;
