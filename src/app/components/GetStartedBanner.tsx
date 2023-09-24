import Button from "./UI/Button";

export default function GetStartedBanner() {
	return (
		<div className="flex justify-between items-center bg-gradient-to-r via-violet-100 to-sky-200 from-pink-200 py-28 px-20 my-20">
			<div>
				<h1 className="text-_darkBlue font-bold text-5xl">
					Start your AI jouney with us!
				</h1>
			</div>

			<div>
				<Button text="Get Started" />
			</div>
		</div>
	);
}
