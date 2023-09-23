import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";

export default function Home() {
	return (
		<div>
			<Navbar />
			<FirstSection />
			<SecondSection />
			<div className="h-screen">hello</div>
		</div>
	);
}
