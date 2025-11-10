import React from "react";
import {
	FaTimes,
	FaHome,
	FaUser,
	FaBriefcase,
	FaLaptopCode,
	FaPhone,
	FaSuitcase,
} from "react-icons/fa";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileNavbar = ({ hideMobileNavbar }) => {
	AOS.init();

	return (
		<div
			className="right-0 fixed w-52 h-screen bg-black z-50"
			style={{ zIndex: 1050 }}
			data-aos="fade-left"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out">
			<div
				className="h-full w-full flex flex-col justify-start items-center gap-7 text-center bg-neutral-900 px-2"
				style={{ fontFamily: "Poppins" }}>
				
				{/* Close Icon */}
				<FaTimes
					className="text-white text-2xl mr-auto ml-2 cursor-pointer mt-5"
					onClick={hideMobileNavbar}
				/>

				{/* Navigation Links */}
				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>

					<Link
						className="navbar text-gray-300 py-2 flex-1 text-center"
						smooth={true}
						to="#home">
						Home
					</Link>
				</div>

				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>
					
					<Link
						className="navbar text-gray-300 py-2 flex-1 text-center"
						smooth={true}
						to="#about">
						About Me
					</Link>
				</div>

				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>
				
					<Link
						className="navbar text-gray-300 py-2 flex-1 text-center"
						smooth={true}
						to="#skills">
						Skills
					</Link>
				</div>

				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>
				
					<Link
						className="navbar text-gray-300 py-2 flex-1 text-center"
						smooth={true}
						to="#projects">
						Projects
					</Link>
				</div>
				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>
					
					<Link
						className="navbar text-gray-300 py-2 flex-1 text-center"
						smooth={true}
						to="#experience">
						Experience
					</Link>
				</div>

				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>
				
					<Link
						className="navbar text-gray-300 py-2 flex-1 text-center"
						smooth={true}
						to="#contact">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
