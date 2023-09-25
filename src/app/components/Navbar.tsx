"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Button from "./UI/Button";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";

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
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const toggleDropdownMenu = () => {
		setShowDropdown(!showDropdown);
	};

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
		<>
			<nav
				className={`hidden md:flex justify-between items-center px-20 py-6 border-b-2 border-_darkBlue backdrop-blur-md fixed top-0 left-0 right-0 z-10 transition-transform duration-300 transform ${
					isScrolling ? "-translate-y-full" : "translate-y-0"
				}`}
			>
				<div>
					<Link href={"/"}>
						<Image
							src="/IONI_LOGO.svg"
							alt="logo"
							width={85}
							height={24}
							className="hover:-translate-y-1 duration-200 cursor-pointer"
						/>
					</Link>
				</div>
				<div>
					<ul className="flex gap-10 text-_black font-bold text-lg">
						{navLinks.map((link, index) => (
							<Link key={index} href={link.link}>
								<li className="cursor-pointer hover:text-_pink duration-300 link-underline link-underline-black">
									{link.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div>
					<Button text="Contact sales" />
				</div>
			</nav>

			<div className="md:hidden p-5 flex justify-end backdrop-blur-md fixed top-0 left-0 right-0 z-10">
				<div className="relative flex items-center justify-center mr-56 cursor-pointer">
					<Link href={"/"}>
						<img src="/IONI_LOGO.svg" width={85} height={24} />
					</Link>
				</div>
				<button
					onClick={toggleDropdown}
					className="p-2 rounded-full text-_darkBlue focus:outline-none"
				>
					<IconMenu2 size={24} />
				</button>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="absolute z-10 mt-12 bg-white text-[#1e4fff] text-lg rounded-md shadow-md border"
					>
						{navLinks.map((link, index) => (
							<button
								key={index}
								className="block px-4 py-2 w-full text-left hover:bg-gray-400 focus:outline-none"
								onClick={() => {
									toggleDropdown();
								}}
							>
								<Link
									href={link.link}
									onClick={() => setIsOpen(false)}
								>
									{link.title}
								</Link>
							</button>
						))}
					</motion.div>
				)}
			</div>
		</>
	);
}
