import React from "react";

const VersionInfo = () => {
	return (
		<div className=" my-6">
			<p>Kenwind UI - Version 1.0</p>
			<p>Release Date: [Insert Date]</p>
			<div className="my-6">
				<p>
					<span>Overview:</span>
					<span>
						Kenwind UI version 1.0 introduces a sleek and modern user interface
						framework designed to streamline the development of responsive and
						visually appealing web applications. This initial release provides a
						solid foundation with essential components and utilities for
						creating consistent and user-friendly designs.
					</span>
				</p>
				<p className="my-6">
					<span>Features:</span>
					<ul>
						<li>
							<span>Core Components: </span>
							<span>
								Includes basic UI components such as buttons, inputs, modals,
								and navigation elements.
							</span>
						</li>
						<li>
							<span>Responsive Design:</span>
							<span>
								Built with responsiveness in mind, ensuring compatibility across
								various devices and screen sizes.
							</span>
						</li>
						<li>
							<span>Customization: </span>
							<span>
								Provides a range of customization options to tailor the look and
								feel of components to fit your project's needs.
							</span>
						</li>
						<li>
							<span>Documentation: </span>
							<span>
								Comprehensive documentation to help you get started quickly and
								efficiently.
							</span>
						</li>
					</ul>

					<p className="my-6">
						<span>Feedback & Support: </span>
						<span>
							For feedback or support, please contact [insert contact
							information] or visit our support page.
						</span>
					</p>

					<p className="my-12 mb-40">
						<span>Future Updates: </span>
						<span>
							Stay tuned for upcoming features and improvements in future
							releases.
						</span>
					</p>

					<div className="container mx-auto text-center">
						<p className="text-sm">
							&copy; {new Date().getFullYear()} Kenwind UI. All rights reserved.
						</p>
						<p className="text-sm">Designed with passion by [kensh1n]</p>
					</div>
				</p>
			</div>
		</div>
	);
};

export default VersionInfo;
