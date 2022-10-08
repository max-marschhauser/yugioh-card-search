import React from "react";
import DisplayDeck from "../../components/displayDeck/DisplayDeck";
import "./deck.scss";

export default function Deck() {
	const LOCAL_STORAGE_KEY = "myDeck";
	let myDeck = localStorage.getItem(LOCAL_STORAGE_KEY);
	let selectedCards = [];

	if (myDeck === null) {
		alert("Add cards to deck");
	} else if (myDeck.length === 8) {
		selectedCards[0] = parseInt(myDeck);
	} else {
		selectedCards = myDeck.split(",");
		for (let i = 0; i < selectedCards.length; i++) {
			selectedCards[i] = parseInt(selectedCards[i]);
		}
	}

	return (
		<>
			<div className="container--page">{DisplayDeck(selectedCards)}</div>;
		</>
	);
}
