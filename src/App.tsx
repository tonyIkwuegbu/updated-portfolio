import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Loading from "../src/components/Loading";

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<Router>
			{loading ? (
				<Loading />
			) : (
				<div className="app">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects" element={<Projects />} />

						{/* <Route exact path="/contact" component={Contact} />  */}
					</Routes>
					<Footer />
				</div>
			)}
		</Router>
	);
}

export default App;
