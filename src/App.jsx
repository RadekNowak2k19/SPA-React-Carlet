// import { FacebookLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
export const App = () => {
	const [isMobileNav, setIsMobileNav] = useState(false);
	useEffect(() => {
		window.addEventListener("resize", e => {
			const width = e.target.innerWidth;
			if (isMobileNav && width > 1024) setIsMobileNav(false);
		});
	}, [isMobileNav]);

	return (
		<>
			<Header setIsMobileNav={setIsMobileNav} />
			{isMobileNav && <Navigation setIsMobileNav={setIsMobileNav} />}
		</>
	);
};
