interface WinBadgeInterface {
	image: string;
	text: string;
}

export default function WinBadge({ image, text }: WinBadgeInterface) {
	return (
		<div className="bg-white border border-red-400 rounded-xl p-2 text-red-400 w-64 h-20 md:h-14 flex items-center gap-2">
			<div>
				<img src={`${image}`} className="w-10" />
			</div>
			<div>
				<p className="text-xs font-semibold">PRODUCT HUNT</p>
				<p className="md:text-md font-bold">{text}</p>
			</div>
		</div>
	);
}
