import React from "react";
import BackgroundText from "../components/BackgroundText";
import HeroImage from "/assets/images/portfolio.jpg";

const HomePage = () => {
	return (
		<div
			className="bg-white flex justify-center items-center h-auto md:h-screen w-full px-5  py-14 md:py-0"
			id="#home">
			<div className="flex flex-col-reverse md:flex-row items-center gap-3 justify-between ">
				<BackgroundText />
				<div className="flex justify-center md:justify-end rotate-12 shrink-0 h-full w-full md:w-[40%] bg-green-500 rounded-full">
					<img
						src={HeroImage}
						alt="Profile"
						className="h-64 w-64 md:h-80 md:w-80 rounded-2xl object-cover ring-4 ring-green-600/40 shadow-[0_0_80px_-20px_rgba(34,197,94,0.5)] mt-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
