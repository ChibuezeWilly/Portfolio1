import React, { useEffect } from "react";
import { FaFolder, FaArrowUpRightFromSquare } from "react-icons/fa6";
import JobiverseImage from "/assets/images/jobiverse1.png";
import Jobiverse2 from "/assets/images/Jobiverse2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Jobiverse = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			className="relative w-full min-h-[300px] bg-white rounded-lg border border-gray-400 hover:border-green-500 transition-all hover:shadow-lg group overflow-hidden flex flex-col md:flex-row"
			data-aos="fade-up"
			data-aos-delay="200"
			data-aos-duration="1000"
			data-aos-once="true">
			{/* LEFT — TEXT (25%) */}
			<div className="w-full md:w-1/4 p-6 flex flex-col">
				<div className="flex justify-between items-start mb-4">
					<FaFolder className="text-green-500 text-3xl" />
					<a
						href="https://jobiverse.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-green-500 transition-colors">
						<FaArrowUpRightFromSquare className="text-lg" />
					</a>
				</div>

				<h3 className="text-black font-bold text-xl mb-3">Jobiverse</h3>

				<p className="text-gray-600 text-sm leading-relaxed mb-5">
					A job board that streamlines job hunting by connecting talent with
					opportunities that fit them best.
				</p>

				<div className="flex flex-wrap gap-2 text-sm text-gray-800">
					<span>React</span>
					<span>Tailwind CSS</span>
					<span>Firebase</span>
					<span>Git</span>
					<span>Node.js</span>
					<span>Express.js</span>
					<span>Responsive Design</span>
				</div>
			</div>

			{/* RIGHT — IMAGES (75%) */}
			<div className="w-full md:w-3/4 flex flex-col md:flex-row bg-gray-50">
				<div className="w-full md:w-1/2 p-4 flex items-center justify-center">
					<img
						src={JobiverseImage}
						alt="Jobiverse preview 1"
						className="w-full h-full object-contain"
					/>
				</div>

				<div className="w-full md:w-1/2 p-4 flex items-center justify-center">
					<img
						src={Jobiverse2}
						alt="Jobiverse preview 2"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default Jobiverse;
