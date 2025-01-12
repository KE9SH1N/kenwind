import Link from "next/link";
import React from "react";
import { TiArrowRight } from "react-icons/ti";

const ElevatedButton = () => {
	return (
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
	);
};

export default ElevatedButton;
