// function for adding cards from search page to the local storage

export default function addCardToCart(card) {
	let parent = card.target.parentElement;
	let name = parent.querySelector("[data-id]");
	let cardId = parseInt(name.dataset.id);

	localStorage.setItem(cardId, 1);
	window.dispatchEvent(new Event("storageChanged"));
}
