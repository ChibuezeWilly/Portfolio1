import React from "react";
import Firstproject from "./Firstproject";
import Jobiverse from "./Jobiverse";
import Fixer from "./Fixer";
import Todo from "./Todo";
import Calculator from "./CalculatorProject";
import AOS from "aos";
import "aos/dist/aos.css";
import Facebook from "./Facebook";
import Chatterbox from "./Chatterbox";

const Projects = () => {
	AOS.init();

	return (
		<div className="mt-10 w-full px-5 lg:px-14 relative bg-white py-16" id="projects">
			<h1 className="text-black font-bold text-3xl mb-2">Noteworthy Projects</h1>
			<p className="text-gray-600 mt-1 mb-8 text-sm">
				
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-6 place-items-stretch">

				<Firstproject />
				<Chatterbox />
				<Fixer />
				<Jobiverse />
				{/* <Facebook /> */}
				{/* <Todo />
				<Calculator /> */}
			</div>
		</div>
	);
};

export default Projects;
