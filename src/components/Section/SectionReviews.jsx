import { reviews } from "../../data";
import { Comment } from "./Comment";
import styles from "./SectionReviews.module.scss";
export const SectionReviews = () => {
	return (
		<section className={styles.sectionReviews}>
			<h2>Our Customer’s Reviews</h2>
			<div className={styles.commentsContainer}>
				{reviews.map(comments => (
					<Comment comments={comments} key={comments.id} />
				))}
			</div>
		</section>
	);
};
