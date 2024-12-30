import GlobalLayout from "@/app/global-layout/GlobalLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<GlobalLayout>
				<div className="ct-flex-start my-3">
					<label className="relative cursor-pointer">
						<input
							type="text"
							placeholder="Input"
							className="h-12 w-96 px-[18px] text-sm text-black border-gray-500 border rounded border-opacity-50 outline-none focus:border-sky-600 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
						/>
						<span className="text-lg text-black bg-white text-opacity-80 absolute left-5 top-2.5 px-1 transition duration-200 input-text">
							Input
						</span>
					</label>
				</div>
			</GlobalLayout>
		</div>
	);
};

export default page;
