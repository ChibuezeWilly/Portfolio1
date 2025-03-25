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
			className="right-0 fixed w-52 h-screen z-50"
			style={{ backgroundColor: "#262826", zIndex: 1050 }}
			data-aos="fade-left"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out">
			<div
				className="h-full w-full flex flex-col justify-start items-center gap-7 text-center bg-neutral-900 px-2"
				style={{ fontFamily: "Poppins" }}>
				<div className="bg-neutral-900 w-full pb-5"></div>

				{/* Close Icon */}
				<FaTimes
					className="text-white text-2xl mr-auto ml-2 cursor-pointer"
					onClick={hideMobileNavbar}
				/>

				{/* Navigation Links */}
				<div
					className="flex items-center border-gray-800 w-full px-4"
					style={{ borderWidth: "1px" }}>
					<FaHome className="text-gray-300 w-6" />
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
					<FaUser className="text-gray-300 w-6" />
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
					<FaLaptopCode className="text-gray-300 w-6" />
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
					<FaBriefcase className="text-gray-300 w-6" />
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
					<FaSuitcase className="text-gray-300 w-6" />
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
					<FaPhone className="text-gray-300 w-6" />
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
