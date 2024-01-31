import styles from "./SectionPrimary.module.scss";
export const SectionPrimary = () => {
	return (
		<section className={styles.section}>
			<div className={styles.image}>
				<img src="../../src/images/banner-image1.png" alt="" />
			</div>
			<div className={styles.content}>
				<h1>Ultimate Women&apos;s Skin Roller</h1>
				<p>
					Experience the power of this innovative tool designed to rejuvenate
					and enhance your skin&apos;s natural radiance
				</p>
				<button className="btn">Order now</button>
			</div>
		</section>
	);
};
