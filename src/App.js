import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Loading from "./Loading";

function App() {
	const [searchName, setSearchName] = useState("Toon");
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchName}`).then((response) => {
			setLoading(false);
			setItems(response.data.data);
		});
	}, [searchName]);

	return (
		<>
			<h1>Search Yu-Gi-Oh cards by their names!</h1>
			<div>
				<input type="text" placeholder={searchName} onChange={(e) => setSearchName(e.target.value)} />
			</div>

			{loading ? (
				<Loading />
			) : (
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
						})
					) : (
						<div className="error">There are no cards with that name!</div>
					)}
				</div>
			)}
			<footer className="footer">
				<div className="footer__item">
					<span>&nbsp;Page Author:&nbsp;</span>
					<br />
					Max Marschhauser
				</div>
				<div className="footer__item">
					<span>&nbsp;Yu-Gi-Oh! search database!&nbsp;</span>
					<br />
					Copyright &copy;{+new Date().getFullYear()}.
				</div>
				<div className="footer__item">
					<span>&nbsp;e-mail:&nbsp;</span>
					<br />
					max.marschhauser@gmail.com
				</div>
			</footer>
		</>
	);
}

export default App;
