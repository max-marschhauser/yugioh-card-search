import React from "react";
import "./displayCart.scss";
import removeCardFromCart from "../../utils/removeCardFromCart";

export default function DisplayCart({ items, cartArray }) {
	return items.map((card) => {
		if (cartArray.includes(card.id)) {
			return (
				<section className="cart__items__item" key={card.id}>
					<div data-id={card.id}>{card.name}</div>
					<div>{card.type}</div>
					<div>{card.race}</div>
					<div>{card.card_prices[0].ebay_price} €</div>
					<input type="number" />
					<button className="card__button" onClick={removeCardFromCart}>
						Remove
					</button>
				</section>
			);
		} else {
			return null;
		}
	});
}
