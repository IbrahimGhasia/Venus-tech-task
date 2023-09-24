import PriceCard from "./UI/PriceCard";
import { price } from "../../../constants/Price";

export default function PricingSection() {
	return (
		<div className="py-32 px-20 bg-_gray">
			<h1 className="text-5xl text-center font-bold text-_black my-5">
				Pricing plans
			</h1>

			<p className="text-lg text-center font-normal text-_darkBlue my-5">
				Use ioni for free with your whole team. Upgrade to enable
				<br />
				unlimited issues, enhanced security controls, and additional
				features.
			</p>

			<div className="flex gap-10">
				{price.map((item, key) => (
					<PriceCard
						key={key}
						plan={item.plan}
						beta_or_custom={item.beta_or_custom}
						price={item.price}
						included_list={item.included_list}
					/>
				))}
			</div>
		</div>
	);
}
