import { X } from "@phosphor-icons/react";
import { navigation } from "../../data";
import styles from "./Navigation.module.scss";
import { MobileNavElement } from "./MobileNavElement";
import { useCallback, useEffect } from "react";
export const Navigation = ({ setIsMobileNav }) => {
	const onKeyDown = useCallback(
		e => {
			if (e.key === "Escape") setIsMobileNav(false);
		},
		[setIsMobileNav]
	);
	useEffect(() => {
		window.addEventListener("keydown", e => onKeyDown(e));

		return window.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return (
		<div className={styles.opacity}>
			<div></div>
			<nav className={styles.mobileNavigation}>
				<X
					onClick={() => setIsMobileNav(false)}
					size={32}
					color="#696666"
					weight="regular"
					style={{ cursor: "pointer" }}
				/>
				<ul>
					{navigation.map((el, index) => (
						<MobileNavElement key={index} el={el} />
					))}
				</ul>
			</nav>
		</div>
	);
};
