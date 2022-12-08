import Whatsapp from "../../assets/whatsapp.png";
import Facebook from "../../assets/facebook.png";
import Medium from "../../assets/medium.png";
import Hulu from "../../assets/hulu.png";
import Gmail from "../../assets/gmail.png";

interface AllData {
	id: number;
	title: string;
	color: string;
	logo: string;
	image?: string;
	skill: string[];
	link?: string;
}

export const ProData: AllData[] = [
	{
		id: 1,
		title: "Whatsapp Web 2.0 Clone",
		color: "#00ff00",
		logo: "W",
		image: Whatsapp,
		skill: ["NextJs", "StyledComponents", "FireBase"],
		link: "https://github.com/tonyIkwuegbu/whatsapp-v2.1",
	},
	{
		id: 2,
		title: "Gmail Clone",
		color: "#ff0000",
		logo: "G",
		image: Gmail,
		skill: ["ReactJs", "Redux", "FireBase"],
		link: "https://github.com/tonyIkwuegbu/google-mail-clone",
	},
	{
		id: 3,
		title: "Facebook 2.0 Clone",
		color: "#009EFF",
		logo: "F",
		image: Facebook,
		skill: ["NextJs", "TailwindCSS", "FireBase"],
		link: "https://github.com/tonyIkwuegbu/facebook-v2-clone",
	},
	{
		id: 4,
		title: "Hulu 2.0 Clone",
		color: "#4b6043",
		logo: "H",
		image: Hulu,
		skill: ["NextJs", "TailwindCSS", "FireBase"],
		link: "https://github.com/tonyIkwuegbu/hulu-2.0",
	},
	{
		id: 5,
		title: "Medium 2.0 Clone",
		color: "#000000",
		logo: "M",
		image: Medium,
		skill: ["NextJs", "TailwindCSS", "SanityJs", "TypeScript"],
		link: "https://github.com/tonyIkwuegbu/medium_clone-2.0",
	},
];
