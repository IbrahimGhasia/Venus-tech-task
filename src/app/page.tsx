import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div className="h-screen bg-gradient-to-r from-violet-200 to-pink-200">
			<Navbar />
			<h1 className="text-3xl font-extrabold">Hello</h1>
		</div>
	);
}
