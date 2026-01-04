import React, { useEffect } from "react";
import { FaFolder, FaArrowUpRightFromSquare } from "react-icons/fa6";
import fixer from "/assets/images/holiday.png";
import Fixer2 from "/assets/images/Fixer2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Fixer = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			className="relative w-full min-h-[300px] bg-white rounded-lg border border-gray-400 hover:border-green-500 transition-all hover:shadow-lg group overflow-hidden flex flex-col md:flex-row"
			data-aos="fade-up"
			data-aos-delay="150"
			data-aos-duration="1000"
			data-aos-once="true">
			{/* LEFT — TEXT (25%) */}
			<div className="w-full md:w-1/4 p-6 flex flex-col">
				<div className="flex justify-between items-start mb-4">
					<FaFolder className="text-green-500 text-3xl" />
					<a
						href="https://fixer-holidays.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-green-500 transition-colors">
						<FaArrowUpRightFromSquare className="text-lg" />
					</a>
				</div>

				<h3 className="text-black font-bold text-xl mb-3">Fixer</h3>

				<p className="text-gray-800 text-sm leading-relaxed mb-5">
					A travel platform that helps you plan seamless trips, discover hidden
					gems, and navigate new destinations with ease.
				</p>

				<div className="flex flex-wrap gap-2 text-sm text-gray-800">
					<span>React</span>
					<span>Express.js</span>
					<span>Tailwind CSS</span>
					<span>Git</span>
					<span>Express</span>
					<span>Node.js</span>
					<span>PayPal</span>
					<span>Responsive Design</span>
				</div>
			</div>

			{/* RIGHT — IMAGES (75%) */}
			<div className="w-full md:w-3/4 flex flex-col md:flex-row bg-gray-50">
				<div className="w-full md:w-1/2 p-4 flex items-center justify-center">
					<img
						src={fixer}
						alt="Fixer preview 1"
						className="w-full h-full object-contain"
					/>
				</div>

				<div className="w-full md:w-1/2 p-4 flex items-center justify-center">
					<img
						src={Fixer2}
						alt="Fixer preview 2"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default Fixer;
