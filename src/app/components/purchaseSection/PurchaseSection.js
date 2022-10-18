import React from "react";
import "./purchaseSection.scss";

export default function PurchaseSection({ items, storageIdsNum, useStorageIds }) {
	const storage = { ...localStorage };

	let totalPrice = 0;
	let selectedItems = 0;

	items.forEach((card) => {
		if (storageIdsNum.includes(card.id)) {
			totalPrice += parseFloat(card.card_prices[0].ebay_price) * storage[card.id];
			selectedItems += parseInt(storage[card.id]);
		}
	});

	function HandlePurchase() {
		alert("Thank You for your purchase!");
		localStorage.clear();
		const storage = { ...localStorage };
		useStorageIds(Object.keys(storage));
	}

	return (
		<>
			<div className="cart__purchase">
				<header>PURCHASE INFORMATION</header>
				<p>Selected items: {selectedItems} </p>
				<p>Total price: {totalPrice.toFixed(2)} €</p>
				<button onClick={HandlePurchase}>Purchase</button>
			</div>
		</>
	);
}
