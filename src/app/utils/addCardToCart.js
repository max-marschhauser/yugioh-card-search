export default function addCardToCart(card) {
	let parent = card.target.parentElement;
	let name = parent.querySelector("[data-id]");
	let cardId = parseInt(name.dataset.id);

	localStorage.setItem(cardId, 1);
}
