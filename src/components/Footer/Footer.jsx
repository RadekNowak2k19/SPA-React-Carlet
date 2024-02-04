import styles from "./Footer.module.scss";
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				© 2023 Carlet. Designed By
				<a href="https://templatesjungle.com/">TemplatesJungle</a>
			</p>
		</footer>
	);
};
