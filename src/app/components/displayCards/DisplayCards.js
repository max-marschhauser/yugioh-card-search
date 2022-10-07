import React from "react";
import "./displayCards.scss";

export default function DisplayCards({ items, searchWord }) {
	let keyWord = searchWord.toUpperCase();

	return (
		<>
			{items.map((card) => {
				let cardEffect = card.desc.toUpperCase();
				let cardRace = card.race.toUpperCase();
				let cardName = card.name.toUpperCase();

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
							<header className="card__title">{JSON.stringify(card.name)}</header>
							<p className="card__type">{JSON.stringify(card.type)}</p>
							<p className="card__item">
								<b>Type: </b>
								{JSON.stringify(card.race)}
							</p>
							{JSON.stringify(card.type).includes("Monster") ? (
								<>
									<p className="card__item">
										<b>Attribute: </b>
										{JSON.stringify(card.attribute)}
									</p>
									<p className="card__item">
										<b>Level: </b>
										{JSON.stringify(card.level)}
										&nbsp;
										<img
											className="monsterLevelImage"
											src="monsterLevelImg.png"
											alt="monster card level"
										/>
									</p>
									<p className="card__item">
										<b>ATK: </b>
										{JSON.stringify(card.atk)}
										<b>/ DEF: </b>
										{JSON.stringify(card.def)}
									</p>
								</>
							) : (
								<></>
							)}
							<p className="card__item card__item__cardText">
								<b>Card text: </b>
								{JSON.stringify(card.desc)}
							</p>
							<button className="card__button">Add to deck</button>
						</div>
					);
				} else {
					return null;
				}
			})}
		</>
	);
}
