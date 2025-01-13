import React from "react";

const AnimatedHover = () => {
	return (
		<div className="bg-white flex justify-center items-center p-5">
			<ul className="list-disc px-6">
				<button className="relative px-8 py-2 font-bold text-white group overflow-hidden">
					{/* Glowing background effect */}
					<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-300"></span>

					{/*  Main button background  */}
					<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-90"></span>

					{/*  Shine effect */}
					<span className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000"></span>

					{/* Button text */}
					<span className="relative flex items-center gap-2">
						<span className="tracking-wider">Animated Hover</span>
					</span>

					{/* Border glow effect */}
					<span className="absolute inset-0 w-full h-full border border-cyan-300/50"></span>
				</button>
			</ul>
		</div>
	);
};

export default AnimatedHover;
