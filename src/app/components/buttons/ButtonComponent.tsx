import React from "react";
import AddToCart from "./button/AddToCart";
import AddToCartTwo from "./button/AddToCartTwo";
import SectionHead from "../common/SectionHead";
import ButtonLeftFill from "./button/ButtonLeftFill";
import ButtonRIghtFill from "./button/ButtonRIghtFill";
import ButtonTopToBottomFill from "./button/ButtonTopToBottomFill";
import ButtonBottomToTopFill from "./button/ButtonBottomToTopFill";
import ButtonBorderBox from "./button/ButtonBorderBox";
import ButtonBorderBoxReverse from "./button/ButtonBorderBoxReverse";

const ButtonComponent = () => {
	return (
		<div className="w-full">
			<div>
				<SectionHead title="Add to Cart Buttons" />
			</div>
			<div className=" grid grid-cols-4 gap-5">
				<AddToCart />
				<AddToCartTwo />
				<ButtonLeftFill />
				<ButtonRIghtFill />
			</div>
			<div className="w-full ct-flex-start my-5 space-x-5">
				<ButtonTopToBottomFill />
				<ButtonBottomToTopFill />
				<ButtonBorderBox />
				<ButtonBorderBoxReverse />
			</div>
		</div>
	);
};

export default ButtonComponent;
