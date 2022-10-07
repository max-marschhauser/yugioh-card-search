import React from "react";
import "./displayCards.scss";

export default function DisplayCards({ items, effectRaceSearch }) {
	console.log(items.length);
	return (
		<>
			{items.map((card) => {
				let cardEffect = card.desc.toUpperCase();
				let cardRace = card.race.toUpperCase();

				let keyWord = effectRaceSearch.toUpperCase();

				if (cardEffect.includes(keyWord) || cardRace.includes(keyWord)) {
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
							<p>
								<b>{JSON.stringify(card.name)}</b>
							</p>
							<p>{JSON.stringify(card.type)}</p>
							<p>
								<b>Type: </b>
								{JSON.stringify(card.race)}
							</p>
							{JSON.stringify(card.type).includes("Monster") ? (
								<>
									<p>
										<b>Attribute: </b>
										{JSON.stringify(card.attribute)}
									</p>
									<p>
										<b>Level: </b>
										{JSON.stringify(card.level)}
										&nbsp;
										<img src="monsterLevelImg.png" alt="monster card level" />
									</p>
									<p>
										<b>ATK: </b>
										{JSON.stringify(card.atk)}
										<b> / DEF: </b>
										{JSON.stringify(card.def)}
									</p>
								</>
							) : (
								<></>
							)}
							<p>
								<span>Card text: </span>
								{JSON.stringify(card.desc)}
							</p>
						</div>
					);
				} else {
					return null;
				}
			})}
		</>
	);
}
