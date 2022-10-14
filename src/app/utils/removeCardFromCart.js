export default function addCardToCart(card) {
	let parent = card.target.parentElement;
	let name = parent.querySelector("[data-id]");
	let cardId = name.dataset.id;
	const LOCAL_STORAGE_KEY = "Cart";
	let storage = localStorage.getItem(LOCAL_STORAGE_KEY);
	let cart = [];

	if (storage.length === 8) {
		cart[0] = storage;
	} else {
		cart = storage.split(",");
	}

	console.log(cart);
	console.log(cardId);

	cart = cart.filter(function (item) {
		return item !== cardId;
	});

	console.log(cart);
	console.log(cardId);

	localStorage.setItem(LOCAL_STORAGE_KEY, cart);
}
