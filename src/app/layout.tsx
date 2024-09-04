import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400", "700"], // Specify the weights you need
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kenwind",
	description: "Kenwind- The Ultimate Modern UI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
