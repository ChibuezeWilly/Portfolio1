import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	return (
		<section
			className="w-full md:w-11/12 px-5 lg:px-16 py-12 text-black mx-auto mt-10 bg-white"
			id="contact">
			<h2 className="text-center text-3xl text-black font-semibold">
				Contact Me
			</h2>

			{/* Contact Info */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-5">
				<div className="flex items-center gap-3 bg-white border-2 px-5 py-3 rounded-lg hover:bg-green-50 transition-colors">
					<FaEnvelope className="text-green-500 text-xl" />
					<span className="text-black">pricelesswilliams1234@gmail.com</span>
				</div>

				<div className="flex items-center gap-3 bg-white border-2 px-5 py-3 rounded-lg hover:bg-green-50 transition-colors">
					<FaPhone className="text-green-500 text-xl" />
					<span className="text-black">+229 0161975355</span>
				</div>

				<div className="flex items-center gap-3 bg-white border-2 px-5 py-3 rounded-lg hover:bg-green-50 transition-colors">
					<FaMapMarkerAlt className="text-green-500 text-xl" />
					<span className="text-black">Cotonou, Benin Republic</span>
				</div>
			</div>

			{/* Social Media Links */}
			<div className="flex flex-row justify-center items-center gap-5 mt-5">
				<a
					href="https://www.upwork.com/freelancers/~01b1a9eb5733b0869a"
					target="_blanck"
					className="text-black text-2xl hover:text-green-500 transition-colors">
					<FontAwesomeIcon icon={faUpwork} className="text-2xl" />
				</a>

				<a
					href="https://github.com/ChibuezeWilly"
					target="_blanck"
					className="text-black text-2xl hover:text-green-500 transition-colors">
					<FaGithub />
				</a>

				<a
					href="https://pricelesswilliams1234@gmail.com"
					target="_blanck"
					className="text-black text-2xl hover:text-green-500 transition-colors">
					<MdEmail />
				</a>
			</div>
		</section>
	);
};

export default Contact;
