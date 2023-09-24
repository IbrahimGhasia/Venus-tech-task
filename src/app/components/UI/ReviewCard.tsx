interface ReviewCardInterface {
	title: string;
	text: string;
	image: string;
	name: string;
	designation: string;
}

export default function ReviewCard({
	title,
	text,
	image,
	name,
	designation,
}: ReviewCardInterface) {
	return (
		<div className="flex justify-center">
			<div className="bg-_gray p-4 md:p-10 rounded-3xl h-96 mb-16">
				<div>
					<img src="/quotes.svg" className="h-8 w-8" />
				</div>

				<h1 className="text-lg md:text-3xl text-_black font-bold my-5">
					{title}
				</h1>

				<p className="text-xs md:text-lg text-_darkBlue font-normal my-5">
					{text}
				</p>

				<div className="flex gap-5 items-center">
					<div>
						<img src={image} />
					</div>

					<div>
						<h3 className="text-sm md:text-lg font-semibold text-_darkBlue ">
							{name}
						</h3>
						<h3 className="text-sm md:text-lg font-normal text-_darkBlue">
							{designation}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
