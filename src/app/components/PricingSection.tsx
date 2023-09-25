"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import PriceCard from "./UI/PriceCard";
import { price } from "../../../constants/Price";

export default function PricingSection() {
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
			className="py-32 px-5 md:px-20 bg-_gray"
			ref={ref}
		>
			<h1 className="text-2xl md:text-5xl text-center font-bold text-_black my-5">
				Pricing plans
			</h1>

			<p className="text-sm md:text-lg text-center font-normal text-_darkBlue my-5">
				Use ioni for free with your whole team. Upgrade to enable
				<br className="hidden md:block" />
				unlimited issues, enhanced security controls, and additional
				features.
			</p>

			<div className="flex flex-col md:flex-row justify-center gap-10">
				{price.map((item, key) => (
					<PriceCard
						key={key}
						plan={item.plan}
						beta_or_custom={item.beta_or_custom}
						price={item.price}
						included_list={item.included_list}
					/>
				))}
			</div>
		</motion.div>
	);
}
