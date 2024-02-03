import { howToUseData } from "../../data";
import styles from "./HowToUse.module.scss";
import { Step } from "./Step";
export const HowToUse = () => {
	return (
		<section className={styles.howToUseContainer}>
			<div className={styles.content}>
				<h2>How to use Roller</h2>
				<div>
					{howToUseData.map(step => (
						<Step key={step.id} step={step} />
					))}
				</div>
			</div>
			<div className={styles.imgContainer}>
				<img src="../../src/images/item3.jpg" alt="" />
			</div>
		</section>
	);
};
