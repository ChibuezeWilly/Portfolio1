import React from "react";

const SiciliamiaTest = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9EA8FF]/30 to-[#B3A6FF]/40">
			<div className="flex rounded-2xl shadow-lg overflow-hidden w-[700px] bg-white/10 backdrop-blur-xl">
				{/* Left section */}
				<div className="bg-[#1E1B4B] text-white flex flex-col justify-between p-8 w-1/2">
					<div>
						<p className="uppercase text-sm opacity-80 tracking-widest mb-2">
							Course
						</p>
						<h2 className="text-2xl font-semibold">JavaScript Fundamentals</h2>
					</div>
					<button className="text-sm text-indigo-300 hover:text-indigo-100 mt-6 transition-all duration-200">
						View all chapters{`>`}
					</button>
				</div>

				{/* Right section */}
				<div className="flex flex-col justify-between p-8 bg-white w-1/2 relative">
					<div>
						<p className="uppercase text-sm text-gray-500 font-medium mb-2">
							Chapter 4
						</p>
						<h3 className="text-2xl font-semibold text-gray-800 mb-4">
							Callbacks & Closures
						</h3>

						{/* Progress bar */}
						<div className="flex items-center gap-3 text-sm text-gray-500">
							<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
								<div
									className="h-full bg-indigo-600 rounded-full"
									style={{ width: "70%" }}></div>
							</div>
							<span>6/9 Challenges</span>
						</div>
					</div>

					{/* Continue button */}
					<button className="self-start mt-6 px-6 py-2 bg-[#1E1B4B] text-white rounded-full hover:bg-[#3b3796] transition-all duration-200">
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default SiciliamiaTest;
