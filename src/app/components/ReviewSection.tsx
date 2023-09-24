"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
	Autoplay,
} from "swiper/modules";
import ReviewCard from "./UI/ReviewCard";
import reviews from "../../../constants/Reviews";

export default function ReviewSection() {
	return (
		<div className="mx-20 my-40 grid grid-cols-3">
			<div className="col-span-1">
				<h1 className="text-5xl font-bold text-_darkBlue">
					See why people choose ioni
				</h1>
			</div>

			<div className="col-span-2">
				<Swiper
					slidesPerView={1.5}
					cssMode={true}
					spaceBetween={30}
					// centeredSlides={true}
					pagination={{
						type: "fraction",
					}}
					mousewheel={true}
					keyboard={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
				>
					{reviews.map((item, key) => (
						<SwiperSlide key={key}>
							<ReviewCard
								title={item.title}
								text={item.text}
								image={item.image}
								name={item.name}
								designation={item.designation}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
