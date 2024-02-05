import { useState } from "react";
import styles from "./SectionMovie.module.scss";
export const SectionMovie = () => {
	const [popup, setPopup] = useState(false);

	return (
		<section className={styles.movieContainer}>
			{popup ? (
				<div style={{ position: "relative" }}>
					<button onClick={() => setPopup(false)} className={styles.closeBtn}>
						X
					</button>
					<video width="520" height="340" controls>
						<source src="../../src/video/seal.mp4" />
					</video>
				</div>
			) : (
				<div onClick={() => setPopup(true)}>
					<img src="../../src/images/video.jpg" alt="" />
				</div>
			)}
		</section>
	);
};
