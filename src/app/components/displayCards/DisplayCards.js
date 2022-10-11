import React from "react";
import addCardToCart from "../../utils/addCardToCart";
import "./displayCards.scss";

export default function DisplayCards({ items, searchWord }) {
	let keyWord = searchWord.toUpperCase();

	return (
		<>
			{items.map((card) => {
				let cardEffect = card.desc.toUpperCase();
				let cardRace = card.race.toUpperCase();
				let cardName = card.name.toUpperCase();
				if (card.attribute) {
					let cardAttribute = card.attribute.toUpperCase(); // dodati da se pretražuje i po attributu karte, možda da se odvojeno u if statementu pretražuju spellovi i trapovi, a odvojeno čudovišta
				}

				if (cardEffect.includes(keyWord) || cardRace.includes(keyWord) || cardName.includes(keyWord)) {
					return (
						<div
							key={card.id}
							className={
								card.type === "Spell Card"
									? "card spellCard"
									: card.type === "Trap Card"
									? "card trapCard"
									: card.type === "Normal Monster"
									? "card monsterCardNormal"
									: card.type === "Ritual Monster" || card.type === "Ritual Effect Monster"
									? "card monsterCardRitual"
									: card.type === "Fusion Monster"
									? "card monsterCardFusion"
									: card.type === "Effect Monster" ||
									  card.type === "Flip Effect Monster" ||
									  card.type === "Gemini Monster" ||
									  card.type === "Spirit Monster" ||
									  card.type === "Toon Monster" ||
									  card.type === "Union Effect Monster"
									? "card monsterCardEffect"
									: "card"
							}>
							<header className="card__title" data-id={card.id}>
								{card.name}
							</header>
							<p className="card__type">{card.type}</p>
							<p className="card__item">
								<b>Type: </b>
								{card.race}
							</p>
							{card.type.includes("Monster") ? (
								<>
									<p className="card__item">
										<b>Attribute: </b>
										{card.attribute}
									</p>
									<p className="card__item">
										<b>Level: </b>
										{card.level}
										&nbsp;
										<img
											className="monsterLevelImage"
											src="monsterLevelImg.png"
											alt="monster card level"
										/>
									</p>
									<p className="card__item">
										<b>ATK: </b>
										{card.atk}
										<b>/ DEF: </b>
										{card.def}
									</p>
								</>
							) : (
								<></>
							)}
							<p className="card__item card__item__cardText">
								<b>Card text: </b>
								{card.desc}
							</p>
							<p className="card__item">
								<b>Price: </b> {card.card_prices[0].ebay_price} €
							</p>
							<button className="card__button" onClick={addCardToCart}>
								Add to cart
							</button>
						</div>
					);
				} else {
					return null;
				}
			})}
		</>
	);
}
