import BenefitsSection from "./components/BenefitsSection";
import FeaturesSection from "./components/FeaturesSection";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import FreeTrialSection from "./components/FreeTrialSection";
import GetStartedBanner from "./components/GetStartedBanner";
import HowDoesItWorkSection from "./components/HowDoesItWorkSection";
import Navbar from "./components/Navbar";
import ReviewSection from "./components/ReviewSection";
import SecondSection from "./components/SecondSection";
import StatisticsSection from "./components/StatisticsSection";
import UseCaseSection from "./components/UseCaseSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<FirstSection />
			<SecondSection />
			<FreeTrialSection />
			<StatisticsSection />
			<FeaturesSection />
			<GetStartedBanner />
			<HowDoesItWorkSection />
			<BenefitsSection />
			<UseCaseSection />
			<ReviewSection />
			<Footer />
		</div>
	);
}
