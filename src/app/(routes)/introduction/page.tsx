"use client";
import GInput from "@/app/components/inputs/GInput";
import GlobalLayout from "@/app/global-layout/GlobalLayout";
import React, { useState } from "react";

const page = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	return (
		<div>
			<GlobalLayout>
				<GInput
					label="Global Input"
					placeholder="place input here"
					type="text"
					required={true}
					value={name}
					onChange={(e: any) => setName(e.target.value)}
					labelClassName="text-red-500"
					inputClassName="placeholder:text-green-500"
				/>
			</GlobalLayout>
		</div>
	);
};

export default page;
