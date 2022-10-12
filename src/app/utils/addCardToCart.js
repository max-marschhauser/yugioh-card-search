export default function addCardToCart(card) {
	let parent = card.target.parentElement;
	let name = parent.querySelector("[data-id]");
	let cardId = parseInt(name.dataset.id);
	const LOCAL_STORAGE_KEY = "Cart";
	let storage = localStorage.getItem(LOCAL_STORAGE_KEY);
	let cart = [];

	if (storage === null) {
		cart = [];
	} else if (storage.length === 8) {
		cart[0] = storage;
	} else {
		cart = storage.split(",");
	}

	cart.push(cardId.toString());

	localStorage.setItem(LOCAL_STORAGE_KEY, cart);
}
