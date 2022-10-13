import React from "react";
import "./displayCart.scss";

export default function DisplayCart({ items, cartArray }) {
	return items.map((card) => {
		if (cartArray.includes(card.id)) {
			return <div key={card.id}>{card.name}</div>;
		} else {
			return null;
		}
	});
}
