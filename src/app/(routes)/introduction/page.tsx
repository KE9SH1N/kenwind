import Introduction from "@/app/global-component/introduction/Introduction";
import GlobalLayout from "@/app/global-layout/GlobalLayout";
import React from "react";

const page = () => {
	return (
		<div>
			<GlobalLayout>
				{/* <GInput
					label="Global Input"
					placeholder="place input here"
					type="text"
					required={true}
					value={name}
					onChange={(e: any) => setName(e.target.value)}
					labelClassName="text-red-500"
					inputClassName="placeholder:text-green-500"
				/> */}
				<Introduction />
			</GlobalLayout>
		</div>
	);
};

export default page;
