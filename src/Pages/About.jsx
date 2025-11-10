import React from "react";
import AboutImage from "/assets/images/about.jpg"

const About = () => {
	return (
		<div
			className="h-auto md:h-screen pt-10 md:pt-0 bg-white w-full px-5 lg:px-8"
			style={{ fontFamily: "Roboto" }}
			id="#about">
			<h1 className="text-center font-bold text-2xl md:text-4xl ">
				About Me
			</h1>
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
						engineering the way founders do thinking end-to-end, moving fast,
						validating with users, and owning outcomes. I love translating
						complex systems into interfaces that feel intuitive, human, and
						trustworthy.
					</p>

					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						I take initiative, move fast, and look for ways to improve the
						product. I treat every project like it’s my own taking full
						responsibility for outcomes. I care deeply about building great user
						experiences and helping teams move faster, not just contribute.
					</p>

					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						I’m a{" "}
						<span className="header">
							trustworthy, creative, and effective communicator.
						</span>
						I’m also a{" "}
						<span className="header">
							team player, collaborator, and problem solver.
						</span>
						I’m eager to join a forward-thinking organization that values
						growth, ownership, and innovation.
					</p>

					<p className="text-black text-base text-center mt-3 leading-relaxed tracking-wide text-pretty">
						When I’m not coding, I enjoy taking walks, playing football, or
						relaxing with a good game. As a proud Manchester United fan, I never
						miss a match when I can.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
