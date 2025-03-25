import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Todo1 from "/assets/images/todo.png";

const Todo = () => {
	return (
		<div
			className="relative w-80 h-auto p-3 mt-10 bg-gradient-to-br from-black via-neutral-900 to-gray-500 backdrop-blur-lg rounded-md shadow-xl border border-white/20"
			data-aos="fade-right"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			data-aos-anchor-placement="top-center">
			<img
				src={Todo1}
				alt="Lumora Preview"
				className="rounded-lg mt-4 shadow-md w-full pt-5"
			/>
			<div className="flex flex-row justify-center items-center mt-5">
				<h1 className="header font-bold text-3xl text-center text-white">
					My Todo
				</h1>
				<div className="flex flex-row space-x-5 items-center text-gray-400 ml-auto">
					<div className="h-7 w-7 rounded-full bg-slate-900 flex justify-center items-center">
						<a href="https://todo-gamma-seven-67.vercel.app/" target="_blanck">
							<FaArrowRightFromBracket className="text-sm hover:text-white transition -rotate-45" />
						</a>
					</div>
				</div>
			</div>
			<p
				className="text-gray-300 mt-5 text-base leading-relaxed"
				style={{ fontFamily: "Rubik" }}>
				A task management app where users can add, edit, mark as complete, and
				delete tasks. It helps users stay organized by keeping track of daily
				tasks or work and study schedules.
			</p>
			<div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
				<span className="px-3 py-1 bg-white/10 rounded-md">Html</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">CSS</span>

				<span className="px-3 py-1 bg-white/10 rounded-md">JavaScript</span>
			</div>
		</div>
	);
};

export default Todo;
