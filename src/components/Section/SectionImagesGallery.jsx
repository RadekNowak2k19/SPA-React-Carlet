import { imagesGallery } from "../../data";
import styles from "./SectionImagesGallery.module.scss";
export const SectionImagesGallery = () => {
	return (
		<section className={styles.imagesGallery}>
			{imagesGallery.map((img, index) => (
				<div className={styles.image} key={index}>
					{" "}
					<img src={img} alt="" />{" "}
				</div>
			))}
		</section>
	);
};
