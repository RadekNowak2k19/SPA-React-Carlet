import styles from "./OverviewElement.module.scss";
export const OverviewElement = ({ el }) => {
	return (
		<div className={styles.overviewElement}>
			<div className={styles.image}>
				<div>
					<img src={el.image} alt="" />
				</div>
			</div>
			<div className={styles.content}>
				<span>{el.title}</span>
				<p>{el.description}</p>
			</div>
		</div>
	);
};
