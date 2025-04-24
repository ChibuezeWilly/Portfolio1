import React from "react";
import { FaBuilding } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
	AOS.init();

	return (
		<div className="w-full h-auto pb-10 bg-neutral-900 mt-10" id="#experience">
			<div className="pb-10 w-full px-5 lg:px-16 pt-5 ">
				<h1 className="header font-bold text-3xl  text-white">Experience</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
					{/* first */}
					<div
						className="mt-10 h-96 flex flex-row justify-evenly"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<div className="bg-gray-600 h-7 w-14 rounded-tr-xl flex justify-center items-center">
							<p className="text-white">2024</p>
						</div>
						<div className="left w-full ml-2">
							<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
								Frontend Web Developer
							</h1>
							<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									I worked on a <span className="header">Web3</span> project
									where I integrated wallet functionality using{" "}
									<span className="header">RainbowKit</span> from the{" "}
									<span className="header">Wagmi</span> library, combined with{" "}
									<span className="header">React</span> and{" "}
									<span className="header">Tailwind CSS</span> for a sleek and
									responsive front-end. <br />
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									The project focuses on creating seamless wallet connections
									using Wagmi, with integrated forms for referral submissions
									and a point system based on both referrals and on-chain
									activity.
								</li>
							</div>
						</div>
					</div>
					{/* second */}
					<div
						className=" mt-10 h-96 flex flex-row justify-evenly"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<div className="bg-gray-600 h-7 w-14 rounded-tr-xl flex justify-center items-center">
							<p className="text-white">2024</p>
						</div>
						<div className="left w-full ml-2">
							<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
								Frontend Web Developer
							</h1>
							<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									I worked on a <span className="header">React</span> job board
									project where I focused on building a dynamic and
									user-friendly platform for job seekers and employers.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									The project involved utilizing{" "}
									<span className="header">React</span> for the front-end,
									implementing smooth state management using{" "}
									<span className="header">Zustand</span> and{" "}
									<span className="header">useEffect</span>, and ensuring
									responsive design with{" "}
									<span className="header">Tailwind CSS</span>
								</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
