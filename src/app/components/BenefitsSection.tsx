import benefits from "../../../constants/Benefits";
import BeenfitCard from "./UI/BenefitCard";

export default function BenefitsSection() {
	return (
		<div className="mx-20 my-20">
			<h1 className="text-5xl font-bold text-_black text-center my-5">
				Benefits
			</h1>
			<p className="text-lg font-normal text-_darkBlue text-center my-5">
				Streamline your workflow with AI
			</p>

			<div className="grid grid-cols-2 gap-x-20">
				{benefits.map((item, key) => (
					<BeenfitCard
						key={key}
						image={item.image}
						heading={item.title}
						text={item.text}
					/>
				))}
			</div>
		</div>
	);
}
