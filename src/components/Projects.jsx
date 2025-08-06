import React from "react";
import Firstproject from "./Firstproject";
import Jobiverse from "./Jobiverse";
import Fixer from "./Fixer";
import Todo from "./Todo";
import Calculator from "./CalculatorProject";
import AOS from "aos";
import "aos/dist/aos.css";
import Facebook from "./Facebook";

const Projects = () => {
	AOS.init();

	return (
		<div className="mt-10 w-full px-5 lg:px-14 relative" id="#projects">
			<h1 className="text-white font-bold text-3xl">Top Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
				<Firstproject />
				<Fixer />
				<Jobiverse />
				<Facebook />
				<Todo />
				<Calculator />
			</div>
		</div>
	);
};

export default Projects;
