"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface BenefitCardInterface {
	image: string;
	heading: string;
	text: string;
}

export default function BeenfitCard({
	image,
	heading,
	text,
}: BenefitCardInterface) {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div className="text-center" ref={ref}>
			<motion.div
				initial={{ opacity: 0, zIndex: -1 }}
				animate={inView ? { opacity: 1, zIndex: 1 } : {}}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				className="flex justify-center"
			>
				<img src={image} className="w-28 h-28 my-5" />
			</motion.div>

			<motion.div
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : {}}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className="text-3xl font-bold text-_black my-5"
			>
				{heading}
			</motion.div>
			<motion.div
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : {}}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
				className="text-lg text-_darkBlue font-normal my-5 text-justify px-10"
			>
				{text}
			</motion.div>
		</div>
	);
}
