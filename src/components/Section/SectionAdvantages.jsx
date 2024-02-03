import { TruckIcon } from "../svg/TruckIcon";
import { CartIcon } from "../svg/CartIcon";
import { GiftIcon } from "../svg/GiftIcon";
import { ClockIcon } from "../svg/ClockIcon";
import styles from "./SectionAdvantages.module.scss";
export const SectionAdvantages = () => {
	return (
		<section className={styles.sectionAdvantages}>
			<div className={styles.advantageContainer}>
				<div className={styles.imageContainer}>
					<TruckIcon />
				</div>
				<div className={styles.content}>
					<span>Quick delivery</span>
					<p>Inside City delivery within 5 days</p>
				</div>
			</div>
			<div className={styles.advantageContainer}>
				<div className={styles.imageContainer}>
					<CartIcon />
				</div>
				<div className={styles.content}>
					<span>Pick up in store</span>
					<p>We have option of pick up in store</p>
				</div>
			</div>
			<div className={styles.advantageContainer}>
				<div className={styles.imageContainer}>
					<GiftIcon />
				</div>
				<div className={styles.content}>
					<span>Special Packaging</span>
					<p>Our packaging is best for products</p>
				</div>
			</div>
			<div className={styles.advantageContainer}>
				<div className={styles.imageContainer}>
					<ClockIcon />
				</div>
				<div className={styles.content}>
					<span>Return policy</span>
					<p>We will take return in some cases</p>
				</div>
			</div>
		</section>
	);
};
