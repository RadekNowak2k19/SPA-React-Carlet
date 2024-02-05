import { useState } from "react";
import { socialMediaLinks } from "../../data";
import { PaperAirPlane } from "../svg/PaperAirPlane";
import styles from "./SectionNewsletter.module.scss";
export const SectionNewsletter = () => {
	const [inputValue, setInputValue] = useState("");
	const onSubmit = e => {
		e.preventDefault();
		const emailRegex = new RegExp(
			/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
			"gm"
		);
		if (inputValue.length === 0) alert("Input cannot be empty");
		else if (!inputValue.match(emailRegex)) alert("Incorrect email");
		else alert("Success!");
	};

	return (
		<section className={styles.newletterContainer}>
			<h2>Subscribe us</h2>
			<p>Subscribe to our newsletter for discounts and updates.</p>
			<form onSubmit={onSubmit} className={styles.sendEmail}>
				<input
					type="email"
					placeholder="Writre your email address here..."
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button className="send">
					<PaperAirPlane />
				</button>
			</form>
			<div className={styles.links}>
				{socialMediaLinks.map(link => (
					<a href="#" className={styles.link} key={link.id}>
						<img src={link.brand} alt="" />
					</a>
				))}
			</div>
		</section>
	);
};
