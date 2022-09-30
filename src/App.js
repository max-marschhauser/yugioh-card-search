import { useState, useEffect } from "react";
import "./App.scss";

function App() {
	const [searchName, setSearchName] = useState("Toon");
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchName}`)
			.then((response) => response.json())
			.then((json) => setItems(json.data));
	}, [searchName]);

	return (
		<>
			<h1>Search Yu-Gi-Oh cards by their names!</h1>
			<div>
				<input type="text" placeholder={searchName} onChange={(e) => setSearchName(e.target.value)} />
			</div>

			<div className="container">
				{items !== undefined ? (
					items.map((card) => {
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
									<span>Type: </span>
									{JSON.stringify(card.type)}
								</p>
								<p>
									<span>Effect: </span>
									{JSON.stringify(card.desc)}
								</p>

								{JSON.stringify(card.atk) !== undefined ? (
									<>
										<p>
											<span>ATK: </span>
											{JSON.stringify(card.atk)}
											<span> / DEF: </span>
											{JSON.stringify(card.def)}
										</p>
										<p>
											<span>Level: </span>
											{JSON.stringify(card.level)}
											&nbsp;
											<img src="starImg.png" alt="monster card level" />
										</p>
									</>
								) : (
									<></>
								)}
							</div>
						);
					})
				) : (
					<div className="error">There are no cards with that name!</div>
				)}
			</div>
		</>
	);
}

export default App;
