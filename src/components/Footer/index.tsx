import React from "react";
import { FootData } from "./FooterData";

const index: React.FC = () => {
	return (
		<div className="flex items-center aspect-auto justify-center gap-x-5 p-10 text-center mt-[3rem] ml-[1.5rem] w-24">
			{FootData.map((item) => (
				<a
					className="text-2xl"
					href={item?.link}
					key={item?.id}
					style={{ color: item.color }}
					target="_blank"
					rel="noreferrer"
				>
					<item.icon />
				</a>
			))}
		</div>
	);
};

export default index;
