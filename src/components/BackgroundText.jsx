import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";

const BackgroundText = () => {
	AOS.init();

	return (
		<div className="flex justify-center items-center overflow-hidden">
			<div
				className="px-3 md:px-10 py-5 md:py-10 w-full"
				data-aos="fade-left"
				data-aos-delay="10"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-anchor-placement="top-center">
				<h1 className="text-white text-lg font-semibold">Nice to meet you</h1>
				<div className="intro decoration">
					<h1 className="header text-3xl md:text-5xl font-bold">
						<ReactTyped
							strings={[`I'm Chibueze Williams`]}
							typeSpeed={100}
							backSpeed={100}
							loop
						/>
					</h1>
					<p
						className="text-white text-3xl md:text-5xl"
						style={{ fontFamily: "Poppins" }}>
						Front-End Developer
					</p>
					<p className="text-gray-400 mt-2 text-base">
						I'm a developer passionate about crafting accessible, pixel-perfect
						user interfaces that blend thoughtful design with robust
						engineering.
					</p>
					<p className="text-gray-400 mt-5 text-base">
						I love creating web interfaces that engage users and leave a lasting
						impression on clients. I believe that a well-designed, user-friendly
						experience is key to building strong relationships and ensuring
						client satisfaction
					</p>
					<div className="flex flex-row gap-5 mt-5">
						<a
							href="https://www.upwork.com/freelancers/~01b1a9eb5733b0869a"
							target="_blanck"
							className="text-white text-2xl">
							<FontAwesomeIcon
								icon={faUpwork}
								className="text-green-600 text-2xl"
							/>
						</a>

						<a
							href="https://github.com/ChibuezeWilly"
							target="_blanck"
							className="text-white text-2xl">
							<FaGithub />
						</a>

						<a
							href="https://pricelesswilliams1234@gmail.com"
							target="_blanck"
							className="text-white text-2xl">
							<MdEmail />
						</a>
					</div>
					<Link smooth={true} to="#contact">
						<button
							className="h-10 w-52 text-yellow-400 bg-transparent border-yellow-400 mt-7"
							style={{ borderWidth: "1px" }}>
							Contact Me !
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BackgroundText;
