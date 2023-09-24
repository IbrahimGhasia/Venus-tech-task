"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StatisticsSection() {
	const { ref, inView } = useInView({
		triggerOnce: true, // This will trigger the animation only once
		threshold: 0.2, // Adjust this value as needed
	});

	return (
		<div className="flex justify-center text-center gap-40 my-40" ref={ref}>
			<motion.div
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : {}}
				transition={{ duration: 1 }}
			>
				<div className="gradient-text text-9xl font-extrabold">
					92<span className="text-4xl">%</span>
				</div>
				<div>
					<p className="text-lg font-normal">
						Average response <br /> accuracy
					</p>
				</div>
			</motion.div>
			<motion.div
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : {}}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className="gradient-text text-9xl font-extrabold">
					+88<span className="text-4xl">%</span>
				</div>
				<div>
					<p className="text-lg font-normal">Average productivity</p>
				</div>
			</motion.div>
			<motion.div
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { x: 0, opacity: 1 } : {}}
				transition={{ duration: 1, delay: 1 }}
			>
				<div className="gradient-text text-9xl font-extrabold">3x</div>
				<div>
					<p className="text-lg font-normal">
						Reduce resolution times <br />
						for general questions
					</p>
				</div>
			</motion.div>
		</div>
	);
}
