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
	return (
		<nav className="flex justify-between items-center px-16 py-10">
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
							className="cursor-pointer hover:text-_pink duration-200"
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
