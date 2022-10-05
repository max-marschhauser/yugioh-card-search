import React from "react";

export default function DisplayCards({ items }) {
	return (
		<>
			{items.map((card) => {
				return (
					<div
						key={card.id}
						className={
							card.type === "Spell Card"
								? "card spellCard"
								: card.type === "Trap Card"
								? "card trapCard"
								: card.type.includes("Monster")
								? "card monsterCard"
								: "card"
						}>
						<p>
							<span>Name: </span>
							{JSON.stringify(card.name)}
						</p>
						<p>
							<span>Card type: </span>
							{JSON.stringify(card.type)}
						</p>
						<p>
							<span>Type: </span>
							{JSON.stringify(card.race)}
						</p>
						{JSON.stringify(card.type).includes("Monster") ? (
							<>
								<p>
									<span>Attribute: </span>
									{JSON.stringify(card.attribute)}
								</p>
								<p>
									<span>Level: </span>
									{JSON.stringify(card.level)}
									&nbsp;
									<img src="monsterLevelImg.png" alt="monster card level" />
								</p>
								<p>
									<span>ATK: </span>
									{JSON.stringify(card.atk)}
									<span> / DEF: </span>
									{JSON.stringify(card.def)}
								</p>
							</>
						) : (
							<></>
						)}
						<p>
							<span>Effect: </span>
							{JSON.stringify(card.desc)}
						</p>
					</div>
				);
			})}
		</>
	);
}
