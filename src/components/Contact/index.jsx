import React, { useState } from "react";
import "./style.css";
import emailjs from "emailjs-com";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [deliver, setDeliver] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_jsvdjc8",
				"template_bwuzqjc",
				{ name, email, message },
				"jG0jfyteyiFBUYSrM",
			)
			.then((response) => {
				console.log("SUCCESS", response.status, response.text);
				setEmail("");
				setName("");
				setMessage("");
				setTimeout(() => {
					setDeliver(`Thank you ${name}, I'll get back to you soon.`);
				}, 5000);
			})
			.catch((error) => {
				console.log("oops! Failed", error);
			});
	};

	return (
		<div className="contact">
			<div>
				<h1>Contact me!</h1>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252166.39753871926!2d7.254267964001987!3d9.054646210491764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1621591763826!5m2!1sen!2sng"
					title="abujaMap"
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
				></iframe>
				<h4>Address: Federal Capital Territory, Abuja</h4>
			</div>

			<div>
				<h4> Contact me directly on Whatsapp</h4>
				<a href="https://wa.link/enmows" target="_blank" rel="noreferrer">
					<img
						src="https://img.icons8.com/color/452/whatsapp--v1.png"
						alt="whatsapp-icon"
					/>
				</a>
			</div>

			<div
				className="shadow-lg bg-gray-300 p-5 my-10 mx-auto flex-col items-center justify-center"
				align="center"
			>
				<h4>
					Interested in working together? please fill out the form below...
				</h4>
				<h4 style={{ color: "green" }}>{deliver}</h4>
				<form onSubmit={sendEmail} className="mx-auto">
					<label className="flex flex-col space-x-3 my-3 mx-auto w-full lg:w-[50%]">
						<span className="text-gray-700 text-sm flex-auto ml-5" align="left">
							FullName{" "}
						</span>
						<input
							required
							className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-400 outline-none focus:ring"
							placeholder="please enter your name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label className="flex flex-col space-x-3  my-3 mx-auto w-full lg:w-[50%]">
						<span className="text-gray-700 text-sm flex-auto ml-5" align="left">
							Email{" "}
						</span>
						<input
							required
							className="shadow border rounded py-2 px-3 form-input mt-1 block w-full  ring-blue-400 outline-none focus:ring"
							placeholder="please enter your email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label className="flex flex-col space-x-3  my-3 mx-auto w-full lg:w-[50%]">
						<span className="text-gray-700 text-sm flex-auto ml-5" align="left">
							Message{" "}
						</span>
						<textarea
							required
							className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-400 outline-none focus:ring"
							placeholder="Tell me a little about your project..."
							multiline="true"
							type="text"
							rows={6}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</label>

					<div className="mx-auto" align="center">
						<button
							type="button"
							className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
