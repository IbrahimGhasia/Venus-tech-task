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
	return (
		<div className="text-center">
			<div className="flex justify-center">
				<img src={image} className="w-28 h-28 my-5" />
			</div>

			<h3 className="text-3xl font-bold text-_black my-5">{heading}</h3>
			<p className="text-lg text-_darkBlue font-normal my-5 text-justify">
				{text}
			</p>
		</div>
	);
}
