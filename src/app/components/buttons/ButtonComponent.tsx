import React from "react";
import AddToCart from "./button/AddToCart";
import AddToCartTwo from "./button/AddToCartUpSideDown";
import SectionHead from "../common/SectionHead";

const ButtonComponent = () => {
	return (
		<div className="w-full">
			<div>
				<SectionHead headingText="Add to Cart Buttons" />
			</div>
			<div className=" grid grid-cols-4 gap-5">
				<AddToCart />
				<AddToCartTwo />
			</div>
		</div>
	);
};

export default ButtonComponent;
