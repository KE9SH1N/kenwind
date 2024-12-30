"use client";
import React, { useState } from "react";
import CodeSnipetModal from "../../modals/CodeSnipetModal";
import CodeSnipetComp from "../../common/CodeSnipetComp";
import AddToCart from "../button/AddToCart";
import AddToCartUpSideDown from "../button/AddToCartUpSideDown";

const ButtonAddToCartUpSideDownCard = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleShowCode = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const buttonAddToCartUpSideDownCode = `
            <div className="w-full relative ct-flex-center gap-4 my-3 z-10">
                <button
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="min-w-56 relative overflow-hidden py-5 px-6 bg-blue-600 text-white rounded ct-flex-center smooth-animation-mid"
                >
                    {/* Cart Icon - Slide down from top */}
                    <span
                        className={\`absolute inset-0 ct-flex-center smooth-animation-mid \${
                            hovered ? "translate-y-0" : "-translate-y-full"
                        }\`}
                    >
                        <FiShoppingCart className="text-xl" />
                    </span>

                    {/* Text - Slide down and fade out */}
                    <span
                        className={\`absolute inset-0 text-sm ct-flex-center smooth-animation-mid \${
                            hovered ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                        }\`}
                    >
                        Add to Cart
                    </span>
                </button>
            </div>
        `;

	return (
		<CodeSnipetComp toggleShowCode={toggleShowCode} isOpen={isOpen}>
			<AddToCartUpSideDown />
			{isOpen && (
				<CodeSnipetModal
					closeModal={closeModal}
					componentCode={buttonAddToCartUpSideDownCode}
				/>
			)}
		</CodeSnipetComp>
	);
};

export default ButtonAddToCartUpSideDownCard;
