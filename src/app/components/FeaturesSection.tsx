"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import features from "../../../constants/Features";
import FeatureCard from "./UI/FeatureCard";

export default function FeaturesSection() {
	return (
		<div className="my-20">
			<div className="text-center">
				<h1 className="text-_black font-bold my-5 text-5xl">
					Features
				</h1>
				<p className="text-_darkBlue font-normal my-5 text-xl">
					Automate customer service and bring its efficiency to a new
					level
				</p>
			</div>

			<div className="px-20 my-5">
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						type: "fraction",
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper"
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
				>
					{features.map((item, key) => (
						<SwiperSlide key={key}>
							<FeatureCard
								heading={item.heading}
								text={item.text}
								image={item.image}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
