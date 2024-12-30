"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import AddToCart from "../button/AddToCart";

const ButtonAddToCartCard = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const buttonAddToCartCode = `
        <div className="w-full relative group ct-flex-center gap-4 my-3 z-10">
			<button className="min-w-56 ct-flex-center text-sm font-light py-3 px-6 rounded-sm bg-yellow-900 text-white capitalize">
				Add to cart
			</button>
			<div className="absolute top-1/2 -left-6 -translate-y-1/2 transform opacity-0 group-hover:translate-x-[105px] group-hover:opacity-100 smooth-animation-high">
				<FiShoppingCart className="text-[20px] text-white" />
			</div>
		</div>
	`;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<AddToCart />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={buttonAddToCartCode}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default ButtonAddToCartCard;
