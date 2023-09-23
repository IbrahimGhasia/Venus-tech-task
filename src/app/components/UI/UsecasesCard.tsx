interface UsecasesCardInterface {
	index: number;
	title: string;
	text: string;
}

export default function UsecasesCard({
	index,
	title,
	text,
}: UsecasesCardInterface) {
	return (
		<div className="w-1/4">
			<h1 className="text-9xl text-_black font-extrabold -mb-16 ml-10">
				{index}
				<span className="text-6xl">#</span>
			</h1>
			<div className="border border-_black py-20 px-10 h-96">
				<h1 className="text-xl text-_black font-bold">{title}</h1>
				<p className="text-gray-700 text-sm my-5">{text}</p>
			</div>
		</div>
	);
}
