import React from "react";
import { FaBuilding } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
	AOS.init();

	return (
		<div
			className="w-full h-auto pb-10 bg-white text-black mt-10"
			id="experience">
			<div className="pb-10 w-full px-5 lg:px-16 pt-5 ">
				<h1 className="header font-bold text-3xl  text-black">Experience</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 place-items-stretch gap-6">
					{/* first */}
					<div
						className="mt-10 h-auto flex flex-row justify-evenly"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<div className="left w-full ml-2 bg-black border border-neutral-700 rounded-xl p-6 ">
							<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
								Founding Frontend Web Developer
							</h1>
							<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
								{/* Web3 dApp Project */}

								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Engineered a Web3 dApp for a Web3 startup using{" "}
									<span className="header">React, Tailwind, React Query</span>{" "}
									to improve data-fetching performance, boosting active user
									retention by 70% within the first 8 months.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Integrated <span className="header">Wagmi</span> and{" "}
									<span className="header">Viem</span> for wallet
									authentication, enabling reliable on-chain interactions.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Collaborated with backend developers to integrate{" "}
									<span className="header">Python RESTful APIs</span>, improving
									data flow by 25%.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Partnered with blockchain teams to implement{" "}
									<span className="header">NFT smart contracts</span>, improving
									on-chain security and reliability.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Led end-to-end frontend deployment and testing with{" "}
									<span className="header">Cursor AI</span> using{" "}
									<span className="header">Vitest</span>, reducing
									pre-deployment bugs by 40%.
								</li>
							</div>
						</div>
					</div>
					{/* second */}
					<div
						className=" mt-10 h-auto flex flex-row justify-evenly"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<div className="left w-full ml-2 bg-black border border-neutral-700 rounded-xl p-6 ">
							<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
								Frontend Web Developer
							</h1>
							<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Developed a responsive holiday booking platform using{" "}
									<span className="header">React, Tailwind CSS, Zustand</span>{" "}
									for global state management.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Collaborated closely with backend teams to integrate backend
									services, ensuring data security and optimizing system
									performance.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Translated <span className="header">Figma</span> designs into
									polished, responsive UI components, enhancing visual
									consistency.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Used <span className="header">React Query</span> for efficient
									data retrieval and caching, improving load times by 40%.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Integrated secure{" "}
									<span className="header">PayPal payments</span>, resulting in
									a 25% increase in successful bookings within two months of
									launch.
								</li>
							</div>
						</div>
					</div>
					{/* third */}
					<div
						className="h-auto flex flex-row justify-evenly"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<div className="left w-full ml-2 bg-black border border-neutral-700 rounded-xl p-6 ">
							<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
								Founder of Chatterbox
							</h1>
							<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Developing <span className="header">Chatterbox</span>, a
									social communication platform enabling users to connect, chat,
									and call friends seamlessly.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Designing a modern responsive interface using{" "}
									<span className="header">
										React, Next.js, Tailwind CSS, Zustand
									</span>{" "}
									for efficient state management, improving UI performance by
									60%.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Integrating real-time messaging and voice/video calling using{" "}
									<span className="header">Socket.IO</span>.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Backend powered by{" "}
									<span className="header">Node.js, Express, MongoDB</span>{" "}
									supporting authentication, private chats, and media uploads.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Integrated{" "}
									<span className="header">Firebase Authentication</span> and{" "}
									<span className="header">Google Sign-In</span> to enhance user
									security and streamline the account registration process by
									70%.
								</li>
							</div>
						</div>
					</div>
					{/* fourth */}
					<div
						className="h-80 flex flex-row justify-evenly "
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<div className="left w-full ml-2 bg-black border border-neutral-700 rounded-xl p-6 ">
							<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
								Frontend Developer
							</h1>
							<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Built a Full-Stack Job Board using{" "}
									<span className="header">
										Next.js, React, TypeScript, Tailwind CSS, AOS, Express,
										Zustand
									</span>
									
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Optimized Job Board performance by implementing{" "}
									<span className="header">lazy loading</span>, reducing load
									time by 75% and enhancing user experience.
								</li>
								<li className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
									Integrated <span className="header">Firebase Auth</span> and
									real-time database for secure sign-ins and live job data
									syncing.
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
