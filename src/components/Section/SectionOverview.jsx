import { overview } from "../../data";
import { OverviewElement } from "./OverviewElement";
import styles from "./SectionOverview.module.scss";
export const SectionOverview = () => {
	return (
		<section className={styles.overview}>
			<div className={styles.overview_desc}>
				<h2>Product Overview</h2>
				<p>
					Welcome to the elegant world of Reddy. Our watches blend exquisite
					craftsmanship with timeless design, making them the perfect accessory
					for any occasion. Each timepiece is meticulously handcrafted to ensure
					superior quality and precision. Explore our collection and discover
					the artistry that defines us.
				</p>
			</div>
			<div className={styles.overview_li}>
				{overview.map(el => (
					<OverviewElement key={el.id} el={el} />
				))}
			</div>
		</section>
	);
};
