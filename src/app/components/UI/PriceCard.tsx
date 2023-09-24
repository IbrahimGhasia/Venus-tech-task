import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";
import Button from "./Button";
import FullLengthButton from "./FullLengthButton";

type Item = {
	text: string;
	strikeThrough: boolean;
};

interface PriceCardInterface {
	plan: string;
	beta_or_custom: string;
	price: string;
	included_list: Item[];
}

export default function PriceCard({
	plan,
	beta_or_custom,
	price,
	included_list,
}: PriceCardInterface) {
	return (
		<div className="py-5 px-8 md:w-[400px] rounded-3xl shadow-lg bg-white relative">
			<h3 className="text-xl md:text-2xl font-semibold text-_black my-2 md:my-5">
				{plan}
			</h3>
			<h6 className="text-md md:text-lg font-semibold text-_black my-2 md:my-5">
				{beta_or_custom}
			</h6>
			<h2 className="font-bold text-3xl md:text-4xl text-_darkBlue my-2 md:my-5">
				$ {price}{" "}
				<span className="text-xl md:text-2xl font-normal text-_black">
					/mo
				</span>
			</h2>

			<hr className="my-5 md:my-10 border-t border-_black" />

			<h3 className="text-xl md:text-2xl font-semibold text-_black my-5">
				What{"'"}s included
			</h3>

			<ul className="mb-20">
				{included_list.map((item, index) => (
					<div className="flex items-center gap-5 my-5" key={index}>
						<div>
							{item.strikeThrough ? (
								<IconCircleXFilled
									size={24}
									className="text-red-500"
								/>
							) : (
								<IconCircleCheckFilled
									size={24}
									className="text-green-500"
								/>
							)}
						</div>
						<li
							className={`text-sm md:text-md font-normal ${
								item.strikeThrough ? "line-through" : ""
							}`}
						>
							{item.text}
						</li>
					</div>
				))}
			</ul>

			<div className="absolute p-5 bottom-0 left-0 w-full flex justify-center gap-5">
				<FullLengthButton text="Free trial" />
			</div>
		</div>
	);
}
