import { useState } from "react";
import styles from "./SectionOrder.module.scss";
import { Button } from "./Button";
export const SectionOrder = () => {
	const [quantity, setQuantity] = useState(1);
	const colors = ["#ce7847", "#abaa6c", "#696666"];

	const handleQuantity = direction => {
		if (direction === "increase") setQuantity(quantity + 1);
		if (direction === "decrease") {
			if (quantity <= 0) return;
			else setQuantity(quantity - 1);
		}
	};

	return (
		<section className={styles.orderContainer}>
			<div className={styles.imageContainer}>
				<img src="../../src/images/order.jpg" alt="" />
			</div>
			<div className={styles.content}>
				<div className={styles.center}>
					<h2>Unlock The Secrets Of Radiant Skin</h2>
					<p>
						Order your women&apos;s skin roller today and start your journey
						towards healthier, glowing skin.
					</p>
					<div className={styles.model}>
						<div>
							<b>Model: </b>Carlet Roller
						</div>
						<div>
							<b>Price: </b>$2000.00
						</div>
						<div className={styles.chooseColor}>
							<b>Choose Color: </b>
							{colors.map((color, index) => (
								<div
									style={{ backgroundColor: color }}
									className={styles.color}
									key={index}
								></div>
							))}
						</div>
					</div>
					<div className={styles.quantity}>
						<div>
							<b>Quantity: </b>
						</div>
						<div className={styles.currentQuantity}>
							<button
								onClick={() => handleQuantity("decrease")}
								className={`${styles.square} btnQuantity`}
							>
								-
							</button>
							<div className={styles.square}>{quantity}</div>
							<button
								onClick={() => handleQuantity("increase")}
								className={`${styles.square} btnQuantity`}
							>
								+
							</button>
						</div>
					</div>
					<Button>Order now</Button>
				</div>
			</div>
		</section>
	);
};
