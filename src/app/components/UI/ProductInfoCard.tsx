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
	return (
		<div className="grid grid-cols-2 gap-20 items-center mx-32 my-20">
			{inverted ? null : (
				<div>
					<img
						className="h-fit w-fit shadow-lg rounded-3xl"
						src={image}
					/>
				</div>
			)}
			<div>
				<h1 className="text-4xl font-bold text-_black my-5">
					{heading}
				</h1>
				<p className="text-lg font-normal text-justify text-_darkBlue my-5">
					{text}
				</p>
				<a className="text-xl font-bold text-_pink my-5 cursor-pointer link link-underline link-underline-black">
					Learn more →
				</a>
			</div>
			{inverted ? (
				<div>
					<img
						className="h-fit w-fit shadow-lg rounded-3xl"
						src={image}
					/>
				</div>
			) : null}
		</div>
	);
}
