import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";




interface FooterData {
	id: number;
	icon?: any;
    color: string;
    link: string;
}


export const FootData: FooterData[] = [
	{
		id: 1,
		icon: BsFacebook,
        color: "#3b5998",
        link:"https://web.facebook.com/234Zetrov/"
	},
	{
		id: 2,
		icon: BsGithub,
        color: "#171515",
        link:"https://www.github.com/tonyIkwuegbu"
	},
	{
		id: 3,
		icon: BsTwitter,
        color: "#00acee",
        link:"https://www.twitter.com/_Zetrov/"
    },
    {
		id: 4,
		icon: BsLinkedin,
        color: "#0077B5",
        link:"https://www.linkedin.com/in/anthony-ikwuegbu-941590a5"
	},
];
