"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "./UI/Button";
import usecases from "../../../constants/UserCases";
import UsecasesCard from "./UI/UsecasesCard";

export default function UseCaseSection() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div className="bg-_gray md:h-screen px-5 md:px-20 py-20" ref={ref}>
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-_black my-5 mt-16">
						Use cases
					</h1>
					<p className="text-lg font-normal text-_darkBlue my-5">
						Learn how ioni can drive your customer support
					</p>
				</div>
				<div>
					<Button text="Contact sales" />
				</div>
			</div>

			<motion.div
				className="flex flex-col md:flex-row gap-5"
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : {}}
				transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
			>
				{usecases.map((item, key) => (
					<UsecasesCard
						key={key}
						index={item.index}
						title={item.title}
						text={item.text}
					/>
				))}
			</motion.div>
		</div>
	);
}
