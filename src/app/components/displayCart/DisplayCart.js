// component for displaying cards on cart page

import React from "react";
import "./displayCart.scss";

export default function DisplayCart(props) {
	const { items, storageIdsNum, HandleStorageChange } = props;

	function RemoveCardFromCart(card) {
		let idToRemove = parseInt(card.target.parentElement.querySelector("[data-id]").dataset.id);

		localStorage.removeItem(idToRemove);

		const storage = { ...localStorage };
		HandleStorageChange(Object.keys(storage));

		window.dispatchEvent(new Event("storageChanged"));
	}

	return items.map((card) => {
		if (storageIdsNum.includes(card.id)) {
			let storage = { ...localStorage };
			let cardQuantity = storage[card.id];

			function QuantityChanged(event) {
				cardQuantity = event.target.value;
				if (cardQuantity < 1 || isNaN(cardQuantity) === true) {
					event.target.value = 1;
					cardQuantity = 1;
				}

				localStorage.setItem(card.id, cardQuantity);
				const storage = { ...localStorage };
				HandleStorageChange(Object.keys(storage));
			}

			return (
				<section className="cart__items__item" key={card.id}>
					<div data-id={card.id}>{card.name}</div>
					<div>{card.type}</div>
					<div>{card.card_prices[0].ebay_price} €</div>
					<input className="quantity" type="number" defaultValue={cardQuantity} onChange={QuantityChanged} />
					<button className="removeButton" onClick={RemoveCardFromCart}>
						Remove
					</button>
				</section>
			);
		} else {
			return null;
		}
	});
}
