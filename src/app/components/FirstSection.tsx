"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Button from "./UI/Button";
import WinBadge from "./UI/WinBadge";

export default function FirstSection() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<motion.div
			initial={{ opacity: 0, zIndex: -1 }}
			animate={inView ? { opacity: 1, zIndex: 1 } : {}}
			exit={{ opacity: 0 }}
			transition={{ duration: 1, delay: 0.3 }}
			className="h-screen bg-gradient-to-r via-violet-100 to-sky-200 from-pink-200"
			ref={ref}
		>
			<div className="pt-40 md:pt-32 md:grid grid-cols-2 items-center px-5 md:px-20">
				<div>
					<div className="flex gap-3 my-5">
						<WinBadge
							image="/icons8-medal-48.png"
							text="#1 Product of the Day"
						/>
						<WinBadge
							image="/icons8-medal-48-2.png"
							text="#3 Product of the Week"
						/>
					</div>

					<h1 className="font-bold text-4xl md:text-5xl my-5 gradient-text">
						Boost your customer support productivity with ChatGPT-4
					</h1>

					<p className="font-normal text-lg text-_darkBlue my-5">
						Smart chatbot based on the latest AI technology, that
						talks like a human, and creates CTA for your customers.
					</p>

					<Button text="Free Trial" />
				</div>
				<div className="hidden md:flex justify-center">
					<img src="/CHAT.png" alt="chat-img" />
				</div>
			</div>
		</motion.div>
	);
}
