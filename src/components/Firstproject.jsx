import React from "react";
import Lumora from "/assets/images/lumora.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Firstproject = () => {
	AOS.init();

	return (
		<>
			<div
				className="relative w-80 h-auto p-4 mt-10 bg-gradient-to-br from-black via-neutral-900 to-yellow-700 backdrop-blur-xl rounded-md shadow-xl border border-white/20"
				data-aos="fade-left"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-anchor-placement="top-center">
				<img
					src={Lumora}
					alt="Lumora Preview"
					className="rounded-lg mt-4 shadow-md w-full"
				/>
				<div className="flex flex-row justify-center items-center mt-4">
					<h1 className="header font-bold text-3xl text-center text-white">
						Lumora
					</h1>
					<div className="flex flex-row space-x-5 items-center text-gray-400 ml-auto">
						<div className="flex flex-row space-x-5 items-center text-white ml-auto text-sm h-7 w-auto bg-yellow-700 px-3 rounded-md">
							<a href="https://development-repo.onrender.com" target="_blanck">
								Live link
							</a>
							<FaArrowRightFromBracket className="text-sm text-gray-200 transition -rotate-45" />
						</div>
					</div>
				</div>

				<p
					className="text-gray-300 mt-4 text-base leading-relaxed"
					style={{ fontFamily: "Rubik" }}>
					<span className="header font-bold">Lumora</span> is an innovative Web3
					quest-based platform that rewards users for completing tasks and
					engaging with blockchain-based activities.
				</p>

				<div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
					<span className="px-3 py-1 bg-white/10 rounded-md">React</span>
					<span className="px-3 py-1 bg-white/10 rounded-md">Tailwind CSS</span>
					<span className="px-3 py-1 bg-white/10 rounded-md">Wagmi</span>
					<span className="px-3 py-1 bg-white/10 rounded-md">Zustand</span>
					<span className="px-3 py-1 bg-white/10 rounded-md">p5.js</span>
					<span className="px-3 py-1 bg-white/10 rounded-md">Cloudinary</span>
				</div>
			</div>
		</>
	);
};

export default Firstproject;
