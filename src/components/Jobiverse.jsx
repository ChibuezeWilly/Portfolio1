import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import JobiverseImage from '/assets/images/jobiverse1.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Jobiverse = () => {
		AOS.init();
	
	return (
		<div
			className="relative w-80 h-auto p-4 mt-10 bg-gradient-to-br from-black via-neutral-900 to-gray-500 backdrop-blur-lg rounded-md shadow-xl border border-white/20"
			data-aos="fade-right"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			data-aos-anchor-placement="top-center">
			<img
				src={JobiverseImage}
				alt="Lumora Preview"
				className="rounded-lg mt-4 shadow-md w-full"
			/>
			<div className="flex flex-row justify-center items-center mt-4">
				<h1 className="header font-bold text-3xl text-center text-white">
					Jobiverse
				</h1>
				<div className="flex flex-row space-x-5 items-center text-gray-400 ml-auto">
					<div className="h-7 w-7 rounded-full bg-slate-900 flex justify-center items-center">
						<a href="https://jobiverse.vercel.app/" target="_blanck">
							<FaArrowRightFromBracket className="text-sm hover:text-white transition -rotate-45" />
						</a>
					</div>
				</div>
			</div>

			<p
				className="text-gray-300 mt-4 text-base leading-relaxed"
				style={{ fontFamily: "Rubik" }}>
				<span className="header font-bold">Jobiverse</span> is a job board that
				streamlines job hunting by connecting top talent with the right
				opportunities best for them.
			</p>

			<div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
				<span className="px-3 py-1 bg-white/10 rounded-md">React</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Tailwind CSS</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Firebase</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Git</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Express</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Node.js</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">AOS</span>
			</div>
		</div>
	);
};

export default Jobiverse;
