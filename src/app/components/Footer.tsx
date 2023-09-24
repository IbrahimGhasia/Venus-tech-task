import Image from "next/image";
import { features, resources } from "../../../constants/FooterLinks";
import {
	IconBrandFacebook,
	IconBrandLinkedin,
	IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
	return (
		<div className="px-20 pt-20 pb-10 bg-_darkBlue text-white">
			<div className="grid grid-cols-3 gap-5 border-b border-gray-500">
				<div className="">
					<Image
						src="/ioni_light.svg"
						alt="logo"
						width={85}
						height={24}
						className="hover:-translate-y-1 duration-200 cursor-pointer my-5"
					/>

					<p className="text-xl font-semibold my-5">
						Boost your customer support productivity with ChatGPT-4
					</p>
				</div>

				<div className="col-span-2 border-l border-gray-500 flex justify-center gap-40 pb-20">
					<ul>
						<li className="text-2xl font-bold mb-10">Features</li>
						{features.map((item, key) => (
							<li
								key={key}
								className="text-lg hover:text-_pink duration-300 my-4 cursor-pointer"
							>
								{item.title}
							</li>
						))}
					</ul>
					<ul>
						<li className="text-2xl font-bold mb-10">Resources</li>
						{resources.map((item, key) => (
							<li
								key={key}
								className="text-lg hover:text-_pink duration-300 my-4 cursor-pointer"
							>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex justify-between items-center py-5">
				<div>
					<h3 className="text-white font-bold text-xl">
						Copyright © 2023 | ioni
					</h3>
				</div>

				<div className="flex items-center gap-3">
					<IconBrandLinkedin
						size={24}
						className="hover:text-_pink duration-300 cursor-pointer"
					/>
					<IconBrandTwitter
						size={24}
						className="hover:text-_pink duration-300 cursor-pointer"
					/>
					<IconBrandFacebook
						size={24}
						className="hover:text-_pink duration-300 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
}
