import Button from "./UI/Button";

export default function GetStartedBanner() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r via-violet-100 to-sky-200 from-pink-200 py-16 md:py-28 px-10 md:px-20 my-20">
			<div className="text-_darkBlue font-bold text-3xl md:text-5xl text-center md:text-left">
				Start your AI jouney with us!
			</div>

			<div className="mt-5 md:mt-0">
				<Button text="Get Started" />
			</div>
		</div>
	);
}
