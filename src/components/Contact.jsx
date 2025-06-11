import React from "react";
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	return (
		<section
			className="w-full md:w-11/12 px-5 lg:px-16 py-12 text-white mx-auto mt-10"
			id="#contact">
			<div className="about mb-8 text-start">
				<h2 className="about  text-3xl header font-semibold">Contact Me</h2>
			</div>

			{/* Contact Info */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-6">
				<div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg">
					<FaEnvelope className="text-yellow-500 text-xl" />
					<span>pricelesswilliams1234@gmail.com</span>
				</div>

				<div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg">
					<FaPhone className="text-yellow-500 text-xl" />
					<span>+229 61975355</span>
				</div>

				<div className="flex items-center gap-3 bg-gray-800 px-5 py-3 rounded-lg">
					<FaMapMarkerAlt className="text-yellow-500 text-xl" />
					<span>Cotonou, Benin Republic</span>
				</div>
			</div>

			{/* Social Media Links */}
			<div className="flex flex-row justify-center items-center gap-5 mt-5">
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
		</section>
	);
};

export default Contact;
