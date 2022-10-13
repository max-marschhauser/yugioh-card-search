import React from "react";
import "./displayCart.scss";

export default function DisplayCart({ items, cartArray }) {
	return items.map((card) => {
		if (cartArray.includes(card.id)) {
			return (
				<div className="cart__item" key={card.id}>
					<div>{card.name}</div>
				</div>
			);
		} else {
			return null;
		}
	});
}
