import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";
import Profile from "/assets/images/portfolio.jpg";

const Navbar = () => {
	AOS.init();

	const [click, setClick] = useState(null);
	const [activeSection, setActiveSection] = useState("home");
	const showMobileNavbar = () => setClick(true);

	return (
		<>
			{/* Top navigation bar */}
			<nav
				className="fixed top-0 left-0 w-full h-16 backdrop-blur-md"
				style={{ zIndex: 1000 }}>
				<div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">
					{/* Logo left */}
					<div className="flex items-center gap-3">
						<img
							src={Profile}
							alt=""
							className="h-10 w-10 rounded-full object-cover"
						/>
						<p className="text-black font-semibold tracking-wide">CW.</p>
					</div>

					{/* Desktop links */}
					<ul className="hidden md:flex items-center gap-8 text-sm">
						<li className="relative pb-1">
							<Link
								smooth={true}
								to="home"
								className={`cursor-pointer transition-colors ${"text-black hover:text-green-500"}`}
								spy={true}
								activeClass="active">
								Home
							</Link>
						</li>
						<li className="relative pb-1">
							<Link
								smooth={true}
								to="about"
								className={`cursor-pointer transition-colors ${"text-black hover:text-green-500"}`}
								spy={true}
								activeClass="active">
								About
							</Link>
						</li>
						<li className="relative pb-1">
							<Link
								smooth={true}
								to="skills"
								className={`cursor-pointer transition-colors ${"text-black hover:text-green-500"}`}
								spy={true}
								activeClass="active">
								Skills
							</Link>
						</li>
						<li className="relative pb-1">
							<Link
								smooth={true}
								to="projects"
								className={`cursor-pointer transition-colors ${"text-black hover:text-green-500"}`}
								spy={true}
								activeClass="active">
								Projects
							</Link>
						</li>
						<li className="relative pb-1">
							<Link
								smooth={true}
								to="experience"
								className={`cursor-pointer transition-colors ${"text-black hover:text-green-500"}`}
								spy={true}
								activeClass="active">
								Experience
							</Link>
						</li>
						<li className="relative pb-1">
							<Link
								smooth={true}
								to="contact"
								className={`cursor-pointer transition-colors ${"text-black hover:text-green-500"}`}
								spy={true}
								activeClass="active">
								Contact
							</Link>
						</li>
					</ul>

					{/* Mobile menu trigger */}
					<FaBars
						className="text-3xl text-black cursor-pointer md:hidden"
						onClick={showMobileNavbar}
					/>
				</div>
			</nav>

			{click && <MobileNavbar hideMobileNavbar={hideMobileNavbar} />}
		</>
	);
};

export default Navbar;
