import FeaturesSection from "./components/FeaturesSection";
import FirstSection from "./components/FirstSection";
import FreeTrialSection from "./components/FreeTrialSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import StatisticsSection from "./components/StatisticsSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<FirstSection />
			<SecondSection />
			<StatisticsSection />
			<FreeTrialSection />
			<FeaturesSection />
		</div>
	);
}
