import React from "react";

export default function DisplayDeck(selectedCards) {
	return (
		<>
			{selectedCards.map((card) => (
				<div key={card}>{card}</div>
			))}
		</>
	);
}
