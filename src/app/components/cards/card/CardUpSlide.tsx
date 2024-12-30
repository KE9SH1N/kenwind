import Image from "next/image";
import React from "react";

const CardUpSlide = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="relative overflow-hidden cursor-pointer rounded-lg shadow-md group">
				<Image
					src="/card-image.jpg"
					alt="card image"
					height={500}
					width={256}
					className=" rounded-lg transition-transform duration-300"
				/>
				<div className=" text-white absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col text-center h-0 group-hover:h-[80%] w-full bg-gradient-to-t from-black to-transparent rounded-lg transition-all duration-700">
					<h3 className=" font-medium mb-[5px] mt-[25%] text-2xl tracking-widest">
						Heading
					</h3>
					<p className=" text-sm text-center px-2">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Consequatur ea sit tempore accusamus. Porro, perspiciatis.
					</p>
					<button className="py-1 px-3 my-2 border border-gray-500 capitalize text-sm rounded-md hover:border-white transition-all duration-700 ">
						view now
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardUpSlide;
