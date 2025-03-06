import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResearchInsight from "./pages/ResearchInsight";
import ConsultingServices from "./pages/ConsultingServices";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/researchinsight" element={<ResearchInsight />} />
				<Route path="/consultingservices" element={<ConsultingServices />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
