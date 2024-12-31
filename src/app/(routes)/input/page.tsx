import InputLabelAnimation from "@/app/components/inputs/common/InputLabelAnimation";
import InputLabelBorderless from "@/app/components/inputs/common/InputLabelBorderless";
import BorderLessLabelAnimationInput from "@/app/components/inputs/input/BorderLessLabelAnimationInput";
import GlobalLayout from "@/app/global-layout/GlobalLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<GlobalLayout>
				<div className="ct-grid-cols-4 gap-x-3 gap-y-5">
					<InputLabelAnimation />
					<InputLabelBorderless />
				</div>
			</GlobalLayout>
		</div>
	);
};

export default page;
