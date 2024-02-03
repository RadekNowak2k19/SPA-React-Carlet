// import { FacebookLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { SectionPrimary } from "./components/Section/SectionPrimary";
import { SectionOverview } from "./components/Section/SectionOverview";
import { SectionMovie } from "./components/Section/SectionMovie";
import { SectionReviews } from "./components/Section/SectionReviews";
import { HowToUse } from "./components/Section/HowToUse";
import { SectionAdvantages } from "./components/Section/SectionAdvantages";
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
			<main>
				<SectionPrimary />
				<SectionOverview />
				<SectionMovie />
				<SectionReviews />
				<HowToUse />
				<SectionAdvantages />
			</main>
		</>
	);
};
