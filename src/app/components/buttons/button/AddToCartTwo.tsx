"use client";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const AddToCartTwo = () => {
	const [hovered, setHovered] = useState(false);
	return (
		<button
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="relative overflow-hidden py-3 px-6 bg-blue-600 text-white rounded-md flex items-center justify-center smooth-animation-mid"
		>
			{/* Cart Icon - Slide down from top */}
			<span
				className={`absolute inset-0 flex items-center justify-center smooth-animation-mid ${
					hovered ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<FiShoppingCart className="text-2xl" />
			</span>

			{/* Text - Slide down and fade out */}
			<span
				className={`absolute inset-0 text-md flex items-center justify-center smooth-animation-mid ${
					hovered ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
				}`}
			>
				Add to Cart
			</span>
		</button>
	);
};

export default AddToCartTwo;
