import React from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import FacebookImage from "/assets/images/facebook.png";

const Facebook = () => {
    AOS.init();
	return (
		<div
			className="relative w-80 h-auto p-4 mt-10 bg-gradient-to-br from-black via-neutral-900 to-yellow-700 backdrop-blur-xl rounded-md shadow-xl border border-white/20"
			data-aos="fade-left"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			data-aos-anchor-placement="top-center">
			<img
				src={FacebookImage}
				alt="Lumora Preview"
				className="rounded-lg mt-4 shadow-md w-full"
			/>
			<div className="flex flex-row justify-between items-center mt-5">
				<h1 className="header font-bold text-xl text-start text-white">
					Facebook <br /> Marketplace
				</h1>
				<div className="flex flex-row space-x-5 items-center text-gray-400 ml-auto">
					<div className="flex flex-row space-x-5 items-center text-white ml-auto text-sm h-7 w-auto bg-yellow-700 px-3 rounded-md">
						<a
							href="https://facebook-market-place-five.vercel.app/"
							target="_blanck">
							Live link
						</a>
						<FaArrowRightFromBracket className="text-sm text-gray-200 transition -rotate-45" />
					</div>
				</div>
			</div>

			<p
				className="text-gray-300 mt-3  leading-relaxed text-sm"
				style={{ fontFamily: "Rubik" }}>
				A full-stack web application inspired by
				Facebook Marketplace, allowing users to browse, post, and manage
				listings for items for sale. Built with Next.js 15, Supabase for the
				backend/database, React, Zustand for global state, and Tailwind CSS for
				styling.
			</p>

			<div className="mt-1 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
				<span className="px-3 py-1 bg-white/10 rounded-md">Html</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">CSS</span>

				<span className="px-3 py-1 bg-white/10 rounded-md">JavaScript</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">React</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Next.js</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Typescript</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Zustand</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Cursor AI</span>
				<span className="px-3 py-1 bg-white/10 rounded-md">Supabase</span>
			</div>
		</div>
	);
};

export default Facebook;
