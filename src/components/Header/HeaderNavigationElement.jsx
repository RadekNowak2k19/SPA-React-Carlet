import styles from "./HeaderNavigationElement.module.scss";
export const HeaderNavigationElement = ({ el }) => {
	return <li className={styles.link}>{el}</li>;
};
