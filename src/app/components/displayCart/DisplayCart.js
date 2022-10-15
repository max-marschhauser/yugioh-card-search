import React from "react";
import "./displayCart.scss";

export default function DisplayCart({ items, storageIdsNum, useStorageIds }) {
	function RemoveCardFromCart(card) {
		let idToRemove = parseInt(card.target.parentElement.querySelector("[data-id]").dataset.id);

		localStorage.removeItem(idToRemove);

		const storage = { ...localStorage };
		useStorageIds(Object.keys(storage));
		window.dispatchEvent(new Event("storageChanged"));
	}

	return items.map((card) => {
		if (storageIdsNum.includes(card.id)) {
			return (
				<section className="cart__items__item" key={card.id}>
					<div data-id={card.id}>{card.name}</div>
					<div>{card.type}</div>
					<div>{card.race}</div>
					<div>{card.card_prices[0].ebay_price} €</div>
					<input type="number" />
					<button className="card__button" onClick={RemoveCardFromCart}>
						Remove
					</button>
				</section>
			);
		} else {
			return null;
		}
	});
}
