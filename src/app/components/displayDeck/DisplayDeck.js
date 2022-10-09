import React from "react";

export default function DisplayDeck(selectedCards) {
	// displayDeck bi trebao biti sličan kao i displayCards, druga varijabla koja se šalje kao search će biti array s id-evima karata u deku pa će map ići kroz njih i prikazati samo karte iz arraya

	return (
		<>
			{selectedCards.map((card) => (
				<div key={card}>{card}</div>
			))}
		</>
	);
}
