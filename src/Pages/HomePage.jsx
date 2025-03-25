import React from "react";
import BackgroundText from "../components/BackgroundText";

const HomePage = () => {
	return (
		<div
			className="bg-gradient-to-br from-black via-neutral-900 to-yellow-700 backdrop-blur-xl"
			id="#home">
			<div className="h-auto md:h-screen w-full md:w-3/4 px-5 lg:px-16 pt-20 ">
				<div className="home flex justify-center items-center mx-auto h-full w-full ">
					<BackgroundText />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
