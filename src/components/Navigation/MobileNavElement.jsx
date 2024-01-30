import styles from "./MobileNavElement.module.scss";
export const MobileNavElement = ({ el }) => {
	return <div className={styles.mobileNav}>{el}</div>;
};
