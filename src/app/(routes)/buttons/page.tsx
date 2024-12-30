import ButtonBottomWaveCard from "@/app/components/buttons/common/ButtonBottomWaveCard";
import ButtonTopWaveCard from "@/app/components/buttons/common/ButtonTopWaveCard";
import ButtonRightWaveCard from "@/app/components/buttons/common/ButtonRightWaveCard";
import GlobalLayout from "@/app/global-layout/GlobalLayout";
import React from "react";
import ButtonLeftWaveCard from "@/app/components/buttons/common/ButtonLeftWaveCard";
import ButtonBorderBoxCard from "@/app/components/buttons/common/ButtonBorderBoxCard";
import ButtonBorderBoxReverseCard from "@/app/components/buttons/common/ButtonBorderBoxReverseCard";
import ButtonAddToCartCard from "@/app/components/buttons/common/ButtonAddToCartCard";
import ButtonAddToCartUpSideDownCard from "@/app/components/buttons/common/ButtonAddToCartUpSideDownCard";

const page = () => {
	return (
		<GlobalLayout>
			<div className="ct-grid-cols-4 gap-x-3 gap-y-5">
				<ButtonLeftWaveCard />
				<ButtonRightWaveCard />
				<ButtonBottomWaveCard />
				<ButtonTopWaveCard />
				<ButtonBorderBoxCard />
				<ButtonBorderBoxReverseCard />
				<ButtonAddToCartCard />
				<ButtonAddToCartUpSideDownCard />
			</div>
		</GlobalLayout>
	);
};

export default page;
