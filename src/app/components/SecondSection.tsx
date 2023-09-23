import ProductInfoCard from "./UI/ProductInfoCard";
import ProductInfo from "../../../constants/ProductInfo";

export default function SecondSection() {
	return (
		<div>
			{ProductInfo.map((item, key) => (
				<ProductInfoCard
					inverted={item.inverted}
					image={item.image}
					heading={item.heading}
					text={item.text}
					key={key}
				/>
			))}
		</div>
	);
}
