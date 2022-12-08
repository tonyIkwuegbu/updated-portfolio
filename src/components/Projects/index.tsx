import React from "react";
import { ProData } from "./ProjectData";

const index: React.FC = () => {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
			{ProData?.map((item) => (
				<div key={item?.id} className="group shadow-lg p-4 my-3">
					<div className="flex items-center gap-x-5 font-semibold mb-4">
						<span
							className="text-white px-4 py-2 rounded-[100%]"
							style={{ backgroundColor: item?.color }}
						>
							{item?.logo}
						</span>
						<h3 className="text-gray-500">{item?.title}</h3>
					</div>
					<img
						className="w-48 h-48 mx-auto bg-white group-hover:animate-pulse"
						src={item?.image}
						alt={item?.title}
					/>
					<div className="flex items-center gap-x-2 my-4 text-sm font-semibold text-gray-500">
						{item?.skill?.map((val, idx) => (
							<p className="" key={idx}>
								{val}
							</p>
						))}
					</div>
					<a href={item?.link} target="_blank" className="font-semibold hover:text-blue-500">
						GITHUB
					</a>
				</div>
			))}
		</div>
	);
};

export default index;
