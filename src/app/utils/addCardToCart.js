let cart = [];
const LOCAL_STORAGE_KEY = "Cart";

export default function addCardToCart(card) {
	let parent = card.target.parentElement;
	let name = parent.querySelector("[data-id]");
	let cardId = parseInt(name.dataset.id);
	cart.push(cardId);
	localStorage.setItem(LOCAL_STORAGE_KEY, cart);
}
