"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
// import { TECollapse } from "tw-elements-react";

const TECollapse = dynamic(() =>
	import("tw-elements-react").then((res) => res.TECollapse)
);

export default function HowDoesItWorkSection(): JSX.Element {
	const [activeElement, setActiveElement] = useState("element1");

	const handleClick = (value: string) => {
		if (value === activeElement) {
			setActiveElement("");
		} else {
			setActiveElement(value);
		}
	};
	return (
		<>
			<h1 className="text-center text-5xl text-_black font-bold my-5">
				How does ioni work?
			</h1>

			<p className="text-center text-lg text-_darkBlue font-normal my-5">
				Three easy steps to get started exploring Ioni
			</p>

			<div className="grid grid-cols-2 gap-10 mx-20 my-20">
				<div>
					<div id="accordionExample">
						<div className="">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
									type="button"
									onClick={() => handleClick("element1")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<div className="flex items-center gap-5">
										<div>
											<img
												src="/Dynamic_AI_Knowledge_Base.svg"
												className="h-16 w-16"
											/>
										</div>
										<div className="text-4xl font-bold text-_black mt-0">
											1. Accordion Item
										</div>
									</div>
									<span
										className={`${
											activeElement === "element1"
												? `rotate-[-180deg] -mr-1`
												: `rotate-0 fill-[#212529]`
										} ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-6 w-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element1"}
								className="!mt-0 !rounded-b-none !shadow-none border-b"
							>
								<div className="pl-28 text-lg font-bold text-_darkBlue pb-10">
									Add HTML and text pages to your AI database
									and start testing the chat.
								</div>
							</TECollapse>
						</div>
					</div>
					<div id="accordionExample">
						<div className="my-10">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
									type="button"
									onClick={() => handleClick("element2")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<div className="flex items-center gap-5">
										<div>
											<img
												src="/widget_builder.svg"
												className="h-16 w-16"
											/>
										</div>
										<div className="text-4xl font-bold text-_black mt-0">
											2. Create AI assistant
										</div>
									</div>
									<span
										className={`${
											activeElement === "element2"
												? `rotate-[-180deg] -mr-1`
												: `rotate-0 fill-[#212529]`
										} ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-6 w-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element2"}
								className="!mt-0 !rounded-b-none !shadow-none border-b"
							>
								<div className="pl-28 text-lg font-bold text-_darkBlue pb-10">
									Create and customize a personal chatbot that
									perfectly matches the brand voice and your
									buisness visual style.
								</div>
							</TECollapse>
						</div>
					</div>
					<div id="accordionExample">
						<div className="my-10">
							<h2 className="mb-0" id="headingOne">
								<button
									className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
									type="button"
									onClick={() => handleClick("element3")}
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<div className="flex items-center gap-5">
										<div>
											<img
												src="/create_ai_chat.svg"
												className="h-16 w-16"
											/>
										</div>
										<div className="text-4xl font-bold text-_black mt-0">
											3. Analyze conversations
										</div>
									</div>
									<span
										className={`${
											activeElement === "element3"
												? `rotate-[-180deg] -mr-1`
												: `rotate-0 fill-[#212529]`
										} ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-6 w-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</span>
								</button>
							</h2>
							<TECollapse
								show={activeElement === "element3"}
								className="!mt-0 !rounded-b-none !shadow-none border-b"
							>
								<div className="pl-28 text-lg font-bold text-_darkBlue pb-10">
									Check answers and adjust your AI bot. Add
									questions from your support requests, check
									the answer and edit if needed. ioni will
									self-learn and automatically imporve
									auto-responses.
								</div>
							</TECollapse>
						</div>
					</div>
				</div>

				<div>
					<div>
						{activeElement === "element1" && (
							<img src="/AI_Search.png" />
						)}
						{activeElement === "element2" && (
							<img src="/AI_Chatbot.png" />
						)}
						{activeElement === "element3" && (
							<img src="/Conversation_Analytics.png" />
						)}
					</div>
				</div>
			</div>
		</>
	);
}
