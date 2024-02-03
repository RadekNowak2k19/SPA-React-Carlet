import { starComment } from "../../images";

export const StarIcon = ({ length }) => {
	let stars = Array.from({ length: length }, _ => starComment);

	return (
		<>
			{stars.map((star, index) => (
				<img key={index} src={star} />
			))}
		</>
	);
};
