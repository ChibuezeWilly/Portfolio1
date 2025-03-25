import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Experience from "./components/Experience";

const MainLayout = () => {
	return (
		<>
			<div className="main-container ">
				<Navbar />
				<div className="content ">
					<HomePage />
					<About />
					<MySkills />
					<Projects />
					<Experience />
					<Contact />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
