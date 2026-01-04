import React from "react";
import { FaBuilding } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
	AOS.init();

	const experiences = [
		{
			title: "Lumecs — Founding Frontend Developer",
			date: "August 2024 - September 2025",
			points: [
				"Developed the frontend for a Web3 dApp using React, Tailwind, React Query to improve data-fetching performance boosting active user retention by 40% within the first 8 months.",
				"Integrated Wagmi and Viem for reliable wallet authentication, improving connection consistency for users.",
				"Worked closely with backend engineers to connect Python REST APIs, reducing back-and-forth failures and improving data flow.",
				"Collaborated with blockchain engineers to ship NFT smart contract features that made on-chain actions more dependable.",
				"Managed deployment and frontend testing with Cursor AI + Vitest, helping reduce repeated issues before release.",
			],
		},
		{
			title: "Fixer — Freelance Frontend Developer",
			date: "September 2023 - May 2024",
			points: [
				"Created a responsive holiday booking platform with React, Tailwind, and Zustand, improving the mobile experience for users.",
				"Integrated backend services and PayPal payments, resulting in a smoother booking and checkout flow.",
				"Converted Figma designs into reusable components that made UI updates faster for the team.",
				"Used React Query to speed up data-fetching and reduce unnecessary network calls.",
			],
		},
		{
			title: "Chatterbox — Real-time Chat App",
			date: "October 2025 - November 2025",
			points: [
				"Built a real-time social chat app with messaging, calls, and friend interactions using React, Next.js, JavaScript, Tailwind CSS, React Query, and Zustand.",
				"Designed clean, responsive UI and pages with smooth state updates and faster page transitions.",
				"Implemented instant messaging and online presence using Socket.IO for a WhatsApp-like experience.",
				"Developed the backend with Node.js, Express, and MongoDB to support authentication, private chats, and media handling.",
				"Added Firebase Authentication and Google Sign-In to simplify user onboarding and strengthen account security.",
			],
		},
		{
			title: "Jobiverse — Job Board Platform",
			date: "June 2023 - August 2023",
			points: [
				"Developed a Full-Stack Job board using Next.js, React, TypeScript, Tailwind CSS, AOS, Express, Zustand.",
				"Optimized Job board performance by implementing lazy loading reducing load time by 75% enhancing user experience.",
				"Integrated Firebase Auth and real-time database for secure sign-ins and live job data syncing.",
			],
		},
	];

	return (
		<div
			className="w-full h-auto pb-10 bg-white text-black mt-10"
			id="experience">
			<div className="pb-10 w-full px-5 lg:px-16 pt-5">
				<h1 className="header font-bold text-3xl text-black">Experience</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 place-items-stretch gap-6 mt-10">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="relative flex flex-row justify-evenly"
							data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							{/* Left line */}
							<span className="absolute left-0 top-0 h-full w-[3px] bg-neutral-700 rounded"></span>

							{/* Content card */}
							<div className="left w-full ml-6 bg-black border border-neutral-700 rounded-xl p-6">
								<h1 className="first text-white font-bold text-xl md:text-2xl ml-5 md:ml-10">
									{exp.title}
								</h1>
								<div className="second ml-6" style={{ fontFamily: "Poppins" }}>
									{exp.points.map((point, i) => (
										<li
											key={i}
											className="text-gray-200 ml-5 text-wrap leading-relaxed tracking-wide text-sm mt-5">
											{point}
										</li>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
