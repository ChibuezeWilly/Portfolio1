import React from "react";

const About = () => {
	return (
		<div className="w-full bg-neutral-800" id="#about">
			<div
				className="h-auto md:h-screen pb-10 w-full md:w-11/12 px-5 lg:px-20 pt-5"
				style={{ fontFamily: "Roboto" }}>
				<h1 className="header mt-16 font-bold text-2xl md:text-4xl">
					About Me
				</h1>
				<div className="w-full mt-5 flex justify-center items-center mx-auto text-wrap ml-4 md:ml-14">
					<div className=" about">
						<div className="">
							<p className="text-white text-lg text-center sm:text-left mt-2 leading-relaxed tracking-wide track">
								I enjoy transforming ideas into high-quality digital products
								and interfaces, thoughtfully designed for effectiveness and
								usability. I’d love to be part of a cross-functional team that
								values improving lives through user-centered design and web
								experiences
							</p>

							<p className="text-white text-lg text-center sm:text-left mt-2 leading-relaxed tracking-wide">
								I am a{" "}
								<span className="header">
									trustworthy, creative, and effective communicator.
								</span>{" "}
								I'm a{" "}
								<span className="header">
									team player , collaborator and problem solver.
								</span>{" "}
								I’m passionate about my work and eagerly look forward to joining
								a challenging yet rewarding organization that fosters personal
								growth while helping achieve its vision.
							</p>
							<p className="text-white text-lg text-center sm:text-left mt-2 leading-relaxed tracking-wide">
								One of my goals for 2025 is to dive deeper into{" "}
								<span className="header">Mobile Development</span> , as I have a
								strong passion for it. I also aim to expand my skills in other
								areas of tech to become a more versatile developer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
