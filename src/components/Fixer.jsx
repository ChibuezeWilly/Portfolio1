import React from "react";
import fixer from "/assets/images/holiday.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Fixer = () => {
	return (
		<div
			className="relative w-80 h-auto p-3 mt-10 bg-gradient-to-br from-black via-neutral-900 to-yellow-700 backdrop-blur-xl rounded-md shadow-xl border border-white/20"
			data-aos="fade-left"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			data-aos-anchor-placement="top-center">
			<img
				src={fixer}
				alt="Lumora Preview"
				className="rounded-lg mt-4 shadow-md w-full pt-2"
			/>
			<div className="flex flex-row justify-center items-center mt-4">
				<h1 className="header font-bold text-3xl text-center text-white">
					Fixer
				</h1>
				<div className="flex flex-row space-x-5 items-center text-gray-400 ml-auto">
					<div className="flex flex-row space-x-5 items-center text-white ml-auto text-sm h-7 w-auto bg-yellow-700 px-3 rounded-md">
						<a href="https://fixer-holidays.vercel.app/" target="_blanck">
							Live link
						</a>
						<FaArrowRightFromBracket className="text-sm text-gray-200 transition -rotate-45" />
					</div>
				</div>
			</div>

			<p
				className="text-gray-300 mt-4 text-base leading-relaxed"
				style={{ fontFamily: "Rubik" }}>
				<span className="header font-bold">Fixer</span> is a travel platform
				that helps you plan seamless trips, discover hidden gems, and navigate
				new destinations with ease.
			</p>

			<div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
				<span className="px-3 py-1 bg-white/10 rounded-md">React</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Tailwind CSS</span>

				<span className="px-3 py-1 bg-white/10 rounded-md">Git</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Express</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Node.js</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">AOS</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Paypal</span>
			</div>
		</div>
	);
};

export default Fixer;
