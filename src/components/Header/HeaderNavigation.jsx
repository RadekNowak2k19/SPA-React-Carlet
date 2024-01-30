import { List } from "@phosphor-icons/react";
import styles from "./HeaderNavigation.module.scss";
import { navigation } from "../../data";
import { HeaderNavigationElement } from "./HeaderNavigationElement";
import { useEffect, useState } from "react";
export const HeaderNavigation = ({ setIsMobileNav }) => {
	// * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	// * useEffect to check if window width is > 1024px. IF true --> mount <List /> component. ELSE display <nav></nav>
	// * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	const [isMobile, setIsmobile] = useState(false);
	useEffect(() => {
		window.addEventListener("resize", e => {
			const width = e.target.innerWidth;
			return width < 1024 ? setIsmobile(true) : setIsmobile(false);
		});
	}, []);

	return (
		<div className={styles.navigationContainer}>
			<nav className={styles.navigation}>
				<ul>
					{navigation.map((el, index) => (
						<HeaderNavigationElement key={index} el={el} />
					))}
				</ul>
			</nav>
			{isMobile && (
				<List
					size={36}
					color="#696666"
					weight="regular"
					onClick={() => setIsMobileNav(true)}
				/>
			)}

			{/* <div className={styles.mobile}></div> */}
		</div>
	);
};
