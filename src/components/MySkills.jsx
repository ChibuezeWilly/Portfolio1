import Html from "/assets/images/html.png";
import CSS from "/assets/images/css.png";
import JavaSCript from "/assets/images/js.png";
import BootStrap from "/assets/images/bootstrap.jpg";
import Tailwind from "/assets/images/tailwind.png";
import React from "/assets/images/react.png";
import Query from "/assets/images/react-query.png";
import Zustand from "/assets/images/zustand.png";
import Next from "/assets/images/next.png";
import Git from "/assets/images/git.png";
import Firebase from "/assets/images/firebase.png";
import P5 from "/assets/images/p5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MySkills = () => {
	AOS.init();

	return (
		<div
			className="bg-white w-full px-5 lg:px-20 h-auto py-16"
			id="skills">
			<h1 className="text-center font-bold text-2xl md:text-4xl text-black mb-2">My Skills</h1>
			<div className="skillsImage mt-10">
				<div className="mt-5 grid grid-cols-3 md:grid-cols-4 place-items-center gap-5">
					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img src={Html} alt="html image" className="h-12 rounded-full" />
						<p className="text-black mt-2 text-sm font-medium">Html</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img src={CSS} alt="css image" className="h-12 rounded-full" />
						<p className="text-black mt-2 text-sm font-medium">CSS</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img
							src={JavaSCript}
							alt="javascript image"
							className="h-12 rounded-full"
						/>
						<p className="text-black mt-2 text-sm font-medium">JavaScript</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img
							src={Tailwind}
							alt="tailwind image"
							className="h-10 rounded-full"
						/>
						<p className="text-black mt-2 text-sm font-medium">Tailwind</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img src={React} alt="react image" className="h-10 rounded-full" />
						<p className="text-black mt-2 text-sm font-medium">React</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img
							src={BootStrap}
							alt="bootstrap image"
							className="h-14 rounded-full"
						/>
						<p className="text-black mt-2 text-sm font-medium">Bootstrap</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img
							src={Zustand}
							alt="zustand image"
							className="h-10 rounded-full"
						/>
						<p className="text-black mt-2 text-sm font-medium">Zustand</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img src={Next} alt="next.js image" className="h-10 rounded-full" />
						<p className="text-black mt-2 text-sm font-medium">Next.Js</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img src={Git} alt="git image" className="h-10 rounded-full" />
						<p className="text-black mt-2 text-sm font-medium">Git</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img
							src={Firebase}
							alt="firebase image"
							className="h-10 rounded-full"
						/>
						<p className="text-black mt-2 text-sm font-medium">Firebase</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-left"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img
							src={Query}
							alt="react query image"
							className="h-10 rounded-full"
						/>
						<p className="text-black mt-2 text-sm font-medium">React Query</p>
					</div>

					<div
						className="bg-white h-28 w-28 rounded-full flex flex-col justify-center items-center border-2 hover:border-green-600 hover:shadow-lg transition-all"
						data-aos="fade-right"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-anchor-placement="top-center">
						<img src={P5} alt="p5.js image" className="h-10 rounded-full" />
						<p className="text-black mt-2 text-sm font-medium">p5.js</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;
