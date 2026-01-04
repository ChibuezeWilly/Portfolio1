import React from "react";
import AboutImage from "/assets/images/about.jpg"

const About = () => {
	return (
		<div
			className="h-auto md:h-screen pt-10 md:pt-0 bg-white w-full px-5 lg:px-8"
			style={{ fontFamily: "Roboto" }}
			id="#about">
			<h1 className="text-center font-bold text-2xl md:text-4xl ">About Me</h1>
			<div className="w-full mt-10 md:mt-5 flex flex-col md:flex-row justify-between items-start mx-auto text-wrap gap-5">
				<div className="flex justify-center items-center w-full md:w-[40%]">
					<img
						src={AboutImage}
						alt="Profile"
						className="h-96 w-96 object-top rounded-full object-cover shadow-[0_0_50px_-20px]"
					/>
				</div>

				<div className="flex flex-col w-full md:w-[60%]">
					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						I’m a frontend engineer with strong product instincts. I approach
						engineering end-to-end, owning outcomes, moving fast, and building
						interfaces that feel intuitive, human, and trustworthy.
					</p>

					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						I’ve built production-grade applications, both traditional web apps
						and Web3 projects, using React, Next.js, Tailwind CSS, JavaScript,
						Zustand, and React Query. I work closely with backend teams to
						integrate RESTful APIs and focus on creating software that improves
						user experience, solves real problems, and supports the company’s
						mission.
					</p>

					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						I take ownership, communicate clearly, and care deeply about
						shipping quality work. I’m looking to grow in a team that values
						collaboration, thoughtful engineering, and continuous learning, with
						the long-term goal of becoming a technical leader.
					</p>

					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						Outside of coding, I enjoy football, walks, and a good game, and I
						never miss a Manchester United match.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
