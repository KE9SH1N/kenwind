"use client";
import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSnipetModalProps {
	closeModal?: () => void;
	componentCode?: any;
	componentCodeCss?: any;
}

const CodeSnipetModal: React.FC<CodeSnipetModalProps> = ({
	closeModal,
	componentCode,
	componentCodeCss,
}) => {
	const [activeTab, setActiveTab] = useState<string | null>("TSX");
	const handleCopy = () => {
		if (activeTab === "TSX") {
			if (componentCode) {
				navigator.clipboard
					.writeText(componentCode)
					.then(() => {
						alert("Tsx Code copied to clipboard!");
					})
					.catch((err) => {
						console.error("Failed to copy tsx code: ", err);
					});
			}
		}
		if (activeTab === "CSS") {
			if (componentCodeCss) {
				navigator.clipboard
					.writeText(componentCodeCss)
					.then(() => {
						alert("Css Code copied to clipboard!");
					})
					.catch((err) => {
						console.error("Failed to copy css code: ", err);
					});
			}
		}

		if (closeModal) {
			closeModal();
		}
	};

	const hanldeTabSelect = (activeTab: string) => {
		setActiveTab(activeTab);
	};
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg max-w-3xl p-1">
				<div className="w-full ct-flex-between py-3 rounded px-2 bg-gray-200">
					<h2 className="text-xl font-semibold text-yellow-950 ">Code</h2>
					<div className="ct-flex-center gap-x-3">
						<button onClick={handleCopy} className="p-1 rounded bg-slate-400">
							<IoMdCopy className="text-xl text-gray-800" />
						</button>

						<button className="p-1 rounded bg-red-500" onClick={closeModal}>
							<IoClose className="text-xl text-white" />
						</button>
					</div>
				</div>
				<div className="w-full bg-gray-300 my-1">
					<ul className="w-full ct-flex-start">
						<li
							className={`border-b-2 ${
								activeTab === "TSX" ? "border-black" : ""
							} py-2 px-3 cursor-pointer`}
							onClick={() => hanldeTabSelect("TSX")}
						>
							Tsx
						</li>
						<li
							className={`border-b-2 ${
								activeTab === "CSS" ? "border-black" : ""
							} py-2 px-3 cursor-pointer`}
							onClick={() => hanldeTabSelect("CSS")}
						>
							Css
						</li>
					</ul>
				</div>

				{activeTab === "TSX" && (
					<div className="bg-gray-100 w-full max-h-[400px] rounded overflow-auto">
						<SyntaxHighlighter language="javascript" style={dracula}>
							{componentCode}
						</SyntaxHighlighter>
					</div>
				)}
				{activeTab === "CSS" && (
					<div className="bg-gray-100 min-w-2xl max-h-[400px] rounded overflow-auto">
						{componentCodeCss ? (
							<SyntaxHighlighter language="javascript" style={dracula}>
								{componentCodeCss}
							</SyntaxHighlighter>
						) : (
							<div className="min-w-[600px] min-h-[200px] p-4 text-center text-gray-500">
								No Data Found
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default CodeSnipetModal;
