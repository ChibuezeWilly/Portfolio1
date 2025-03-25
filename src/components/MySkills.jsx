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
		<div className="bg-gradient-to-tr from-black via-neutral-900 to-gray-600 backdrop-blur-xl">
			<div
				className=" pt-10 w-full md:w-11/12 px-5 lg:px-20 h-auto pb-10"
				id="#skills">
				<h1 className="header font-bold text-2xl md:text-4xl">My Skills</h1>
				<div className="skillsImage mt-10">
					<div className="mt-5 grid grid-cols-3 md:grid-cols-4 place-items-center gap-5">
						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img src={Html} alt="html image" className="h-12 rounded-lg" />
							<p className="text-white mt-2">Html</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-right"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img src={CSS} alt="css image" className="h-12 rounded-lg" />
							<p className="text-white mt-2">CSS</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img
								src={JavaSCript}
								alt="javascript image"
								className="h-12 rounded-lg"
							/>
							<p className="text-white mt-2">JavaScript</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-right"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img
								src={Tailwind}
								alt="tailwind image"
								className="h-10 rounded-lg"
							/>
							<p className="text-white mt-2">Tailwind</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img src={React} alt="react image" className="h-10 rounded-lg" />
							<p className="text-white mt-2">React</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-right"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img
								src={BootStrap}
								alt="bootstrap image"
								className="h-14 rounded-lg"
							/>
							<p className="text-white mt-2">Bootstrap</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img
								src={Zustand}
								alt="zustand image"
								className="h-10 rounded-lg"
							/>
							<p className="text-white mt-2">Zustand</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-right"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img src={Next} alt="next.js image" className="h-10 rounded-lg" />
							<p className="text-white mt-2">Next.Js</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img src={Git} alt="git image" className="h-10 rounded-lg" />
							<p className="text-white mt-2">Git</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-right"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img
								src={Firebase}
								alt="firebase image"
								className="h-10 rounded-lg"
							/>
							<p className="text-white mt-2">Firebase</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img
								src={Query}
								alt="react query image"
								className="h-10 rounded-lg"
							/>
							<p className="text-white mt-2">React Query</p>
						</div>

						<div
							className="bg-neutral-900 h-24 w-24 rounded-lg flex flex-col justify-center items-center"
							data-aos="fade-right"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-anchor-placement="top-center">
							<img src={P5} alt="p5.js image" className="h-10 rounded-lg" />
							<p className="text-white mt-2">p5.js</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;
