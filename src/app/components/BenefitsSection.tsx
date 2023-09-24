import benefits from "../../../constants/Benefits";
import BeenfitCard from "./UI/BenefitCard";

export default function BenefitsSection() {
	return (
		<div className="mx-5 md:mx-40 my-20">
			<h1 className="text-4xl md:text-5xl font-bold text-_black text-center my-5">
				Benefits
			</h1>
			<p className="text-lg font-normal text-_darkBlue text-center my-5">
				Streamline your workflow with AI
			</p>

			<div className="grid md:grid-cols-2 md:gap-x-10">
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
