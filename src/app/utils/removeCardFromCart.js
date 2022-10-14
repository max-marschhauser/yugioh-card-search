import { useState } from "react";

export default function RemoveCardToCart(card) {
	let parent = card.target.parentElement;
	let name = parent.querySelector("[data-id]");
	let cardId = name.dataset.id;
	const LOCAL_STORAGE_KEY = "Cart";
	let storage = localStorage.getItem(LOCAL_STORAGE_KEY);

	let [cart, setCart] = useState([]);

	if (storage.length === 8) {
		setCart(storage);
	} else {
		setCart(storage.split(","));
	}

	setCart(
		cart.filter(function (item) {
			return item !== cardId;
		})
	);

	localStorage.setItem(LOCAL_STORAGE_KEY, cart);
}
