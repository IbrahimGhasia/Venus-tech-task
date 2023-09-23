"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Button from "./UI/Button";

const navLinks = [
	{
		link: "#",
		title: "Features",
	},
	{
		link: "#",
		title: "Resources",
	},
	{
		link: "/pricing",
		title: "Pricing",
	},
	{
		link: "#",
		title: "FAQ",
	},
];

export default function Navbar() {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		let scrollTimer: any;

		const handleScroll = () => {
			setIsScrolling(true);

			// Clear the previous timer
			clearTimeout(scrollTimer);

			// Set a timer to check if scrolling has stopped
			scrollTimer = setTimeout(() => {
				setIsScrolling(false);
			}, 1000); // Adjust the delay as needed
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`flex justify-between items-center px-16 py-6 border-b-2 border-_darkBlue backdrop-blur-md fixed top-0 left-0 right-0 z-10 transition-transform duration-300 transform ${
				isScrolling ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<div>
				<Image
					src="/IONI_LOGO.svg"
					alt="logo"
					width={85}
					height={24}
					className="hover:-translate-y-1 duration-200 cursor-pointer"
				/>
			</div>
			<div>
				<ul className="flex gap-10 text-_black font-bold text-lg">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className="cursor-pointer hover:text-_pink duration-300 link-underline link-underline-black"
						>
							{link.title}
						</li>
					))}
				</ul>
			</div>
			<div>
				<Button text="Contact sales" />
			</div>
		</nav>
	);
}
