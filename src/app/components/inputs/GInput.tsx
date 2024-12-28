import React from "react";

interface GInputProps {
	label?: string;
	placeholder?: string;
	type?: "text" | "password" | "email" | "number";
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	labelClassName?: string;
	inputClassName?: string;
	id?: string;
	required?: boolean;
}

const GInput: React.FC<GInputProps> = ({
	label,
	placeholder,
	type = "text",
	value,
	onChange,
	labelClassName = "",
	inputClassName = "",
	id,
	required = false,
}) => {
	return (
		<div className={`w-[20%] flex flex-col gap-2 mt-10`}>
			{label && (
				<label htmlFor={id} className={`text-sm ${labelClassName} font-medium`}>
					{label}
				</label>
			)}
			<input
				id={id}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				required={required}
				className={`border border-gray-300 ${inputClassName} rounded-md p-2 py-3 text-sm outline-none placeholder:capitalize placeholder:text-xs  pl-3`}
			/>
		</div>
	);
};

export default GInput;
