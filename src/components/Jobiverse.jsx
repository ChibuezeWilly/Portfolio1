import React from "react";
import { FaFolder, FaArrowUpRightFromSquare } from "react-icons/fa6";
import JobiverseImage from "/assets/images/jobiverse1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Jobiverse = () => {
	AOS.init();

	return (
		<div
			className="relative w-full min-h-[300px] bg-white rounded-lg border border-gray-400 hover:border-green-500 transition-all hover:shadow-lg group overflow-hidden flex flex-col-reverse md:flex-row"
			data-aos="fade-up"
			data-aos-delay="200"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			data-aos-anchor-placement="top-center">
			{/* Left side - Content */}
			<div className="flex-1 p-6 flex flex-col">
				<div className="flex justify-between items-start mb-4">
					<FaFolder className="text-green-500 text-3xl" />
					<div className="flex gap-3">
						<a 
							href="https://jobiverse.vercel.app/" 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-green-500 transition-colors"
							aria-label="External link">
							<FaArrowUpRightFromSquare className="text-lg" />
						</a>
					</div>
				</div>
				
				<h3 className="text-black font-bold text-xl mb-3 group-hover:text-green-500 transition-colors">
					Jobiverse
				</h3>

				<p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
					A job board that streamlines job hunting by connecting top talent with the right opportunities best for them.
				</p>

				<div className="flex flex-wrap gap-2 text-sm text-gray-800">
					<span>React</span>
					<span>Tailwind CSS</span>
					<span>Firebase</span>
					<span>Git</span>
					<span>Express</span>
					<span>Node.js</span>
					<span>AOS</span>
				</div>
			</div>

			{/* Right side - Image */}
			<div className="w-full md:w-1/2 flex">
				<img
					src={JobiverseImage}
					alt="Jobiverse Preview"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Jobiverse;
