import { StarIcon } from "../../components/svg/StarIcon";
import styles from "./Comment.module.scss";
export const Comment = ({ comments }) => {
	return (
		<div className={styles.commentContainer}>
			<p className={styles.comment}>{comments.comment}</p>
			<div className={styles.commentInfo}>
				<div className={styles.stars}>
					<StarIcon length={comments.rating} />
				</div>
				<div className={styles.customerReview}>
					<span className={styles.author}>{comments.author}</span>-
					<span className={styles.date}>{comments.date}</span>
				</div>
			</div>
		</div>
	);
};
