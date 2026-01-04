import React, { useEffect } from "react";
import { FaFolder, FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import MainImage from "/assets/images/MainImage.png";
import FriendImage from "/assets/images/friends.png";

const Chatterbox = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			className="relative w-full min-h-[300px] bg-white rounded-lg border border-gray-400 hover:border-green-500 transition-all hover:shadow-lg group overflow-hidden flex flex-col md:flex-row"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true">
			{/* LEFT — TEXT (25%) */}
			<div className="w-full md:w-1/4 p-6 flex flex-col">
				<div className="flex justify-between items-start mb-4">
					<FaFolder className="text-green-500 text-3xl" />
					<a
						href="https://frontend-repo-rho.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-green-500 transition-colors"
						aria-label="External link">
						<FaArrowUpRightFromSquare className="text-lg" />
					</a>
				</div>

				<h3 className="text-black font-bold text-xl mb-3">Chatterbox</h3>

				<p className="text-gray-600 text-sm leading-relaxed mb-5">
					A real-time messaging platform similar to WhatsApp and Facebook. Users
					can add friends, chat in real time, and make video and audio calls.
				</p>

				<div className="flex flex-wrap gap-2 text-sm text-gray-800">
					<span>React</span>
					<span>Next.js</span>
					<span>Tailwind</span>
					<span>Zustand</span>
					<span>Node.js</span>
					<span>Express.js</span>
					<span>Responsive Design</span>
					<span>MongoDB</span>
					<span>WebSockets</span>
					<span>RESTful APIs</span>
				</div>
			</div>

			{/* RIGHT — IMAGES (75%) */}
			<div className="w-full md:w-3/4 flex flex-col md:flex-row bg-gray-50">
				<div className="w-full md:w-1/2 p-4 flex items-center justify-center">
					<img
						src={MainImage}
						alt="Chatterbox main screen"
						className="w-full h-full object-contain"
					/>
				</div>

				<div className="w-full md:w-1/2 p-4 flex items-center justify-center">
					<img
						src={FriendImage}
						alt="Chatterbox friends screen"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default Chatterbox;
