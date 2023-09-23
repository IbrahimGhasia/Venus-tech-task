import Button from "./UI/Button";

export default function FreeTrialSection() {
	return (
		<div className="p-12 text-center bg-gradient-to-r via-violet-100 to-sky-200 from-pink-200">
			<h1 className="text-4xl text-_black font-bold my-5">
				Join now and elevate your buisness with AI
			</h1>
			<p className="text-xl text-_darkBlue font-normal my-5">
				Unlock Unlimited Potential with Our Free Trial
			</p>
			<div className="my-5">
				<Button text="Free Trial" />
			</div>
		</div>
	);
}
