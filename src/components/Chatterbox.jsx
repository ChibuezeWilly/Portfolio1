import React from "react";
import { FaFolder, FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import fixer from "/assets/images/chatterbox.png";


const Chatterbox = () => {
	AOS.init();

	return (
		<div
			className="relative w-full min-h-[300px] bg-white rounded-lg border border-gray-400 hover:border-green-500 transition-all hover:shadow-lg group overflow-hidden flex flex-col-reverse md:flex-row"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			data-aos-anchor-placement="top-center">
			<div className="flex-1 p-6 flex flex-col">
				<div className="flex justify-between items-start mb-4">
					<FaFolder className="text-green-500 text-3xl" />
					<p className="flex gap-3">Coming soon</p>
				</div>

				<h3 className="text-black font-bold text-xl mb-3 group-hover:text-black transition-colors">
					Chatterbox
				</h3>

				<p className="text-gray-600 text-sm leading-relaxed mb-5">
					A web application that functions just like WhatsApp and Facebook. It
					allows users to add and remove friends, send and receive messages in
					real time, and make video and audio calls.
				</p>

				<div className="flex flex-wrap gap-2 text-sm text-gray-800">
					<span>React</span>
					<span>Next.js</span>
					<span>Tailwind CSS</span>
					<span>Zustand</span>
					<span>Git</span>
					<span>Express</span>
					<span>Node.js</span>
					<span>AOS</span>
					<span>MongoDB</span>
					<span>WebSockets</span>
					<span>Cursor AI</span>
					<span>RESTful APIs</span>
					<span>JavaScript</span>
				</div>
			</div>

			{/* Right side - Image */}
			<div className="w-full md:w-1/2 flex">
				<img
					src={fixer}
					alt="Fixer Preview"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Chatterbox;
