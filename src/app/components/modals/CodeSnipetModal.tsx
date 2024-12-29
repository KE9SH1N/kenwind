"use client";
import { IoMdCopy } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSnipetModalProps {
	closeModal?: () => void;
	componentCode?: any;
}

const CodeSnipetModal: React.FC<CodeSnipetModalProps> = ({
	closeModal,
	componentCode,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg max-w-3xl p-1">
				<div className="ct-flex-between py-3 rounded px-2 bg-gray-200">
					<h2 className="text-xl font-bold ">Component Code</h2>
					<div className="ct-flex-center gap-x-3">
						<button className="p-1 rounded bg-slate-400">
							<IoMdCopy className="text-xl text-gray-800" />
						</button>

						<button className="p-1 rounded bg-red-500" onClick={closeModal}>
							<IoClose className="text-xl text-white" />
						</button>
					</div>
				</div>

				<div className="bg-gray-100 max-h-[300px] rounded overflow-auto">
					<SyntaxHighlighter language="javascript" style={dracula}>
						{componentCode}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
};

export default CodeSnipetModal;
