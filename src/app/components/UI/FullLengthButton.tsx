interface ButtonProps {
	text: string;
}

export default function FullLengthButton({ text }: ButtonProps) {
	return (
		<button className="bg-_darkBlue px-6 py-4 w-full rounded-xl text-white font-bold text-lg hover:bg-_pink hover:-translate-y-1 duration-200">
			{text}
		</button>
	);
}
