import styles from "./Header.module.scss";
import { HeaderNavigation } from "./HeaderNavigation";
export const Header = ({ setIsMobileNav }) => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<img src="../../src/images/logo.png" alt="" />
			</div>
			<HeaderNavigation setIsMobileNav={setIsMobileNav} />
		</header>
	);
};
