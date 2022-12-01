import React from "react";
import { Frontend, Backend, Language } from "./SkillData";

const index: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 mx-auto lg:mx-0 my-10 font-pop">
			<div className="w-full mb-8 mx-auto shadow-md p-4 bg-gray-100 rounded-md">
				<h3 className="text-xl lg:text-2xl text-center py-4">Front-End</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3  text-sm font-semibold">
					{Frontend.map((item) => (
						<p
							key={item.id}
							className="flex items-center  font-medium leading-6"
						>
							<span>
								<item.icon style={{ color: item.color, width: "20px" }} />
							</span>
							{item.title}
						</p>
					))}
				</div>
			</div>

			<div className="w-full mb-8 mx-auto shadow-md p-4 bg-gray-100 rounded-md">
				<h3 className="text-xl lg:text-2xl text-center py-4">Back-End</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 text-sm font-semibold">
					{Backend.map((item) => (
						<p
							key={item.id}
							className="flex items-center font-medium leading-6"
						>
							<span>
								<item.icon style={{ color: item.color, width: "20px" }} />
							</span>
							{item.title}
						</p>
					))}
				</div>
			</div>

			<div className="w-full mb-8 mx-auto shadow-md p-4 bg-gray-100 rounded-md">
				<h3 className="text-xl lg:text-2xl text-center py-4">Languages</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 text-sm font-semibold">
					{Language.map((item) => (
						<p
							key={item.id}
							className="flex items-center gap-x-1 font-medium leading-6"
						>
							<span>
								<item.icon style={{ color: item.color, width: "20px" }} />
							</span>
							{item.title}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default index;
