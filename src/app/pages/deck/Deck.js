import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayDeck from "../../components/displayDeck/DisplayDeck";
import "./deck.scss";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

export default function Deck() {
	const LOCAL_STORAGE_KEY = "myDeck";
	let myDeck = localStorage.getItem(LOCAL_STORAGE_KEY);
	let selectedCards = [];
	const [loading, setLoading] = useState(true);

	const [items, setItems] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?startdate=01/01/2001&enddate=1/1/2008&misc=yes`)
			.then((response) => {
				setLoading(false);
				setItems(response.data.data);
			})
			.catch(() => {
				alert(
					"There is no such card in database, change your search options. Please notice that this version of application only includes TCG Yu-Gi-Oh cards released until 1. 1. 2008. We are planing to add more cards in newer versions of app."
				);
			});
	}, []);

	if (myDeck === null) {
		selectedCards = [];
	} else if (myDeck.length === 8) {
		selectedCards[0] = parseInt(myDeck);
	} else {
		selectedCards = myDeck.split(",");
		for (let i = 0; i < selectedCards.length; i++) {
			selectedCards[i] = parseInt(selectedCards[i]);
		}
	}

	console.log("selected cards are: ");
	console.log(selectedCards);

	return (
		<>
			<div className="container--deck">
				{loading ? <LoadingSpinner /> : <DisplayDeck items={items} selectedCards={selectedCards} />}
			</div>
			;
		</>
	);
}
