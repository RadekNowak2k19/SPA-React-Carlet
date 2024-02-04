import { socialMediaLinks } from "../../data";
import { PaperAirPlane } from "../svg/PaperAirPlane";
import styles from "./SectionNewsletter.module.scss";
export const SectionNewsletter = () => {
	return (
		<section className={styles.newletterContainer}>
			<h2>Subscribe us</h2>
			<p>Subscribe to our newsletter for discounts and updates.</p>
			<form className={styles.sendEmail}>
				<input type="email" placeholder="Writre your email address here..." />
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
