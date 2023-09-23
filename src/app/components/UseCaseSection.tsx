import Button from "./UI/Button";
import usecases from "../../../constants/UserCases";
import UsecasesCard from "./UI/UsecasesCard";

export default function UseCaseSection() {
	return (
		<div className="bg-_gray h-screen px-20 py-20">
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-5xl font-bold text-_black my-5 mt-16">
						Use cases
					</h1>
					<p className="text-lg font-normal text-_darkBlue my-5">
						Learn how ioni can drive your customer support
					</p>
				</div>
				<div>
					<Button text="Contact sales" />
				</div>
			</div>

			<div className="flex gap-5">
				{usecases.map((item, key) => (
					<UsecasesCard
						key={key}
						index={item.index}
						title={item.title}
						text={item.text}
					/>
				))}
			</div>
		</div>
	);
}
