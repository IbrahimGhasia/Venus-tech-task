interface FeatureCardInterface {
	heading: string;
	text: string;
	image: string;
}

export default function FeatureCard({
	heading,
	text,
	image,
}: FeatureCardInterface) {
	return (
		<div className="h-96 w-96 border-0 p-10 rounded-3xl shadow-xl mb-20 bg-_gray">
			<img src={`${image}`} className="my-5" />
			<h3 className="text-3xl font-bold text-_black my-5">{heading}</h3>
			<p className="text-_darkBlue font-normal my-5 text-xl">{text}</p>
			<a className="text-xl font-bold text-_pink my-5 cursor-pointer link link-underline link-underline-black">
				Learn more →
			</a>
		</div>
	);
}
