import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<FirstSection />
			<div className="h-screen">hello</div>
		</div>
	);
}
