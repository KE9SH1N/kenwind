import React from "react";

interface SectionHeadProps {
	title: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title }) => {
	return (
		<div className="text-start mb-8">
			<h2 className="text-yellow-800 text-3xl font-bold">{title}</h2>
		</div>
	);
};

export default SectionHead;
