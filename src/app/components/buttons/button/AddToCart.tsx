import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const AddToCart = () => {
	return (
		<div className="w-full relative group">
			<button className="w-full ct-flex-center text-md font-light py-3 px-6 rounded-sm bg-green-600 text-white capitalize">
				Add to cart
			</button>
			<div className="absolute top-1/2 -left-6 -translate-y-1/2 transform opacity-0 group-hover:translate-x-36 group-hover:opacity-100 smooth-animation-high">
				<FiShoppingCart className="text-[22px] text-white" />
			</div>
		</div>
	);
};

export default AddToCart;
