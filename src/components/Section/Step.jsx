import styles from "./Step.module.scss";
export const Step = ({ step }) => {
	return (
		<div className={styles.stepContainer}>
			<span>Step {step.step}</span>
			<p>{step.text}</p>
		</div>
	);
};
