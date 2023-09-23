import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const thiccboi = localFont({
	src: [
		{
			path: "../../public/fonts/thicccboi/fonts/TTF/THICCCBOI-Bold.ttf",
			weight: "700",
		},
		{
			path: "../../public/fonts/thicccboi/fonts/TTF/THICCCBOI-Regular.ttf",
			weight: "400",
		},
	],
	variable: "--font-thiccboi",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${thiccboi.variable} font-sans`}>{children}</body>
		</html>
	);
}
