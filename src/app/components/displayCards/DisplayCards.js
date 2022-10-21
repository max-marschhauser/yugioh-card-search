// component for displaying cards on search page

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
				let cardAttribute = undefined;

				if (card.attribute) {
					cardAttribute = card.attribute.toUpperCase();
				}

				// display spell and trap cards
				if (
					card.attribute === undefined &&
					(cardEffect.includes(keyWord) || cardRace.includes(keyWord) || cardName.includes(keyWord))
				) {
					return (
						<div
							key={card.id}
							className={
								card.type === "Spell Card"
									? "card spellCard"
									: card.type === "Trap Card"
									? "card trapCard"
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
							<p className="card__item ">
								<b>Card text: </b>
								<span className="cardText">{card.desc}</span>
							</p>
							<p className="card__item">
								<b>Price: </b> {card.card_prices[0].ebay_price} €
							</p>
							<button className="card__button" onClick={addCardToCart}>
								Add to cart
							</button>
						</div>
					);
				}

				// display monster cards
				else if (
					card.attribute !== undefined &&
					(cardEffect.includes(keyWord) ||
						cardRace.includes(keyWord) ||
						cardName.includes(keyWord) ||
						cardAttribute.includes(keyWord))
				) {
					return (
						<div
							key={card.id}
							className={
								card.type === "Normal Monster"
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
							<p className="card__item">
								<b>Attribute: </b>
								{card.attribute}
							</p>
							<p className="card__item">
								<b>Level: </b>
								{card.level}
								&nbsp;
								<img className="monsterLevelImage" src="monsterLevelImg.png" alt="monster card level" />
							</p>
							<p className="card__item">
								<b>ATK: </b>
								{card.atk}
								<b> / DEF: </b>
								{card.def}
							</p>
							<p className="card__item">
								<b>Card text: </b>
								<span className="cardText">{card.desc}</span>
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
