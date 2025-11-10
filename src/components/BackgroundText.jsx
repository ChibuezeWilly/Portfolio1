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
		<div className="flex justify-center items-center overflow-hidden w-full md:w-[60%]">
			<div
				className="px-3 md:px-6 py-5 md:py-10 w-full"
				data-aos="fade-left"
				data-aos-delay="10"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-anchor-placement="top-center">
				<div className="intro decoration">
					<h1 className="text-3xl md:text-5xl font-bold text-black">
						<ReactTyped
							strings={[`I'm Chibueze Williams`]}
							typeSpeed={100}
							backSpeed={100}
							loop
						/>
					</h1>
					<p
						className="text-green-500 text-2xl md:text-4xl mt-1"
						style={{ fontFamily: "Poppins" }}>
						Front-End Developer
					</p>
					<p className="text-black leading-normal text-wrap mt-1">
						I take initiative, move fast, and constantly look for ways to make products better. <br /> I’m hungry to grow, committed to delivering real value, and take full ownership of my work. <br /> I care deeply about creating great user experiences and helping teams move faster.
					</p>

					{/* Action buttons */}
					<div className="mt-6 flex gap-3">
						<a
							href="/assets/images/Resume.pdf"
							download
							className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-green-500 text-white font-medium hover:bg-green-800 transition-colors">
							Download Resume
						</a>
						<Link
							smooth={true}
							to="contact"
							className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-black text-white font-medium hover:bg-gray-100 hover:text-black transition-colors cursor-pointer">
							Hire Me
						</Link>
					</div>

					<div className="flex flex-row gap-5 mt-6">
						<a
							href="https://www.upwork.com/freelancers/~01b1a9eb5733b0869a"
							target="_blanck"
							className="text-black text-2xl">
							<FontAwesomeIcon
								icon={faUpwork}
								className="text-green-600 text-2xl"
							/>
						</a>

						<a
							href="https://github.com/ChibuezeWilly"
							target="_blanck"
							className="text-black text-2xl">
							<FaGithub />
						</a>

						<a
							href="https://pricelesswilliams1234@gmail.com"
							target="_blanck"
							className="text-green-500 text-2xl">
							<MdEmail />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackgroundText;
