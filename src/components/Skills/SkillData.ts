import { AiOutlineHtml5 } from "react-icons/ai";
import {
	SiTailwindcss,
	SiRedux,
	SiJavascript,
	SiExpress,
	SiSqlite,
	SiTypescript,
	SiMongodb,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaNodeJs, FaPython } from "react-icons/fa";

interface Skill {
	id: number;
	icon?: any;
	title: string;
	color: string;
}

export const Frontend: Skill[] = [
	{
		id: 1,
		title: "HTML",
		icon: AiOutlineHtml5,
		color: "#FF7000",
	},
	{
		id: 2,
		title: "CSS",
		icon: DiCss3,
		color: "#332FD0",
	},
	{
		id: 3,
		title: "JavaScript",
		icon: SiJavascript,
		color: "#FFE15D",
	},
	{
		id: 4,
		title: "ReactJs",
		icon: AiOutlineHtml5,
		color: "#009EFF",
	},
	{
		id: 5,
		title: "Redux",
		icon: SiRedux,
		color: "#863A6F",
	},
	{
		id: 6,
		title: "TailwindCSS",
		icon: SiTailwindcss,
		color: "#0D4C92",
	},
	{
		id: 7,
		title: "BootStrap",
		icon: BsBootstrapFill,
		color: "#C539B4",
	},
];

export const Backend: Skill[] = [
	{
		id: 1,
		title: "NodeJs",
		icon: FaNodeJs,
		color: "#54B435",
	},
	{
		id: 2,
		title: "ExpressJs",
		icon: SiExpress,
		color: "#61764B",
	},
	{
		id: 3,
		title: "MonogoDB",
		icon: SiMongodb,
		color: "#FF6D28",
	},
	{
		id: 4,
		title: "SQL",
		icon: SiSqlite,
		color: "#AA8B56",
	},
];

export const Language: Skill[] = [
	{
		id: 1,
		title: "JavaScript",
		icon: SiJavascript,
		color: "#FFE15D",
	},
	{
		id: 2,
		title: "Python",
		icon: FaPython,
		color: "#61764B",
	},
	{
		id: 3,
		title: "TypeScript",
		icon: SiTypescript,
		color: "#332FD0",
	},
];
