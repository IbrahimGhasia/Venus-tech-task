"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ProductInfoCardInterface {
	inverted: boolean;
	image: string;
	heading: string;
	text: string;
}

export default function ProductInfoCard({
	inverted,
	image,
	heading,
	text,
}: ProductInfoCardInterface) {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div
			className="md:grid grid-cols-2 gap-20 items-center mx-5 md:mx-32 my-20"
			ref={ref}
		>
			{inverted ? null : (
				<motion.div
					initial={{ opacity: 0, zIndex: -1 }}
					animate={inView ? { opacity: 1, zIndex: 1 } : {}}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0.7 }}
				>
					<img
						className="hidden md:block h-fit w-fit shadow-lg rounded-3xl"
						src={image}
					/>
				</motion.div>
			)}

			<motion.div
				initial={{ opacity: 0, zIndex: -1 }}
				animate={inView ? { opacity: 1, zIndex: 1 } : {}}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<h1 className="text-4xl font-bold text-_black my-5">
					{heading}
				</h1>
				<p className="text-lg font-normal text-justify text-_darkBlue my-5">
					{text}
				</p>
				<a className="text-xl font-bold text-_pink my-5 cursor-pointer link link-underline link-underline-black">
					Learn more →
				</a>
			</motion.div>

			{inverted ? (
				<motion.div
					initial={{ opacity: 0, zIndex: -1 }}
					animate={inView ? { opacity: 1, zIndex: 1 } : {}}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, delay: 0.7 }}
				>
					<img
						className="hidden md:block h-fit w-fit shadow-lg rounded-3xl"
						src={image}
					/>
				</motion.div>
			) : null}
		</div>
	);
}
