import UpSliderCard from "@/app/components/cards/common/UpSliderCard";
import GlobalLayout from "@/app/global-layout/GlobalLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<GlobalLayout>
				<div className="ct-grid-cols-4 gap-x-3 gap-y-5">
					<UpSliderCard />
				</div>
			</GlobalLayout>
		</div>
	);
};

export default page;
