import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import Profile from "/assets/images/thailand.jpg";
import {
	FaHome,
	FaUser,
	FaBriefcase,
	FaPhone,
	FaLaptopCode,
	FaSuitcase,
} from "react-icons/fa";

const Navbar = () => {
	AOS.init();

	const [click, setClick] = useState(null);
	const showMobileNavbar = () => setClick(true);
	const hideMobileNavbar = () => setClick(false);
	return (
		<>
			<nav
				className="sidebar h-screen left-0 z-50 bg-transparent hidden md:block"
				style={{ zIndex: 1050 }}
				data-aos="fade-right"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-anchor-placement="top-center">
				<div
					className="h-full w-full flex flex-col justify-center items-center gap-7 text-center cursor-pointer bg-neutral-900 px-2"
					style={{ fontFamily: "Poppins", zIndex: 1050 }}>
					<div className="bg-neutral-900  w-full pb-5 -mt-14">
						<img
							src={Profile}
							alt=""
							className="h-24 rounded-md mr-auto float-start top-0"
						/>
					</div>
					<div
						className="flex items-center border-gray-800 w-full px-4 "
						style={{ borderWidth: "1px" }}>
						<FaHome className="text-gray-300 w-6" />
						<Link
							className="navbar text-gray-300 py-2 flex-1 text-center hidden md:block"
							smooth={true}
							to={"#home"}>
							Home
						</Link>
					</div>

					<div
						className="flex items-center border-gray-800 w-full px-4"
						style={{ borderWidth: "1px" }}>
						<FaUser className="text-gray-300 w-6" />
						<Link
							className="navbar text-gray-300 py-2 flex-1 text-center hidden md:block"
							smooth={true}
							to={"#about"}>
							About Me
						</Link>
					</div>

					<div
						className="flex items-center border-gray-800 w-full px-4"
						style={{ borderWidth: "1px" }}>
						<FaLaptopCode className="text-gray-300 w-6" />
						<Link
							className="navbar text-gray-300 py-2 flex-1 text-center hidden md:block"
							smooth={true}
							to={"#skills"}>
							Skills
						</Link>
					</div>

					<div
						className="flex items-center border-gray-800 w-full px-4"
						style={{ borderWidth: "1px" }}>
						<FaBriefcase className="text-gray-300 w-6" />
						<Link
							className="navbar text-gray-300 py-2 flex-1 text-center hidden md:block"
							smooth={true}
							to={"#projects"}>
							Projects
						</Link>
					</div>
					<div
						className="flex items-center border-gray-800 w-full px-4"
						style={{ borderWidth: "1px" }}>
						<FaSuitcase className="text-gray-300 w-6" />
						<Link
							className="navbar text-gray-300 py-2 flex-1 text-center hidden md:block"
							smooth={true}
							to={"#experience"}>
							Experience
						</Link>
					</div>
					<div
						className="flex items-center border-gray-800 w-full px-4"
						style={{ borderWidth: "1px" }}>
						<FaPhone className="text-gray-300 w-6" />
						<Link
							className="navbar text-gray-300 py-2 flex-1 text-center hidden md:block"
							smooth={true}
							to={"#contact"}>
							Contact
						</Link>
					</div>
				</div>
			</nav>
			<nav
				className="bg-neutral-950 w-full flex justify-end items-center space-x-5 h-16 fixed px-5"
				style={{ zIndex: 1000 }}>
				<div className="bg-neutral-900 w-full block md:hidden">
					<img
						src={Profile}
						alt=""
						className="h-10 rounded-full mr-auto float-start"
					/>
				</div>
				<div className="bg-neutral-900">
					<button className="text-gray-300 downloadButton font-semibold  rounded-md h-12 w-40 mt-2">
						<a href="assets/images/Resume.pdf" download>
							Download Resume
						</a>
					</button>
				</div>
				<FaBars
					className="text-5xl text-white cursor-pointer block md:hidden"
					onClick={showMobileNavbar}
				/>
			</nav>
			{click && <MobileNavbar hideMobileNavbar={hideMobileNavbar} />}
		</>
	);
};

export default Navbar;
