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
			<div>
				<input type="text" onChange={(e) => setSearchName(e.target.value)} />
			</div>

			<div className="container">
				{items !== undefined ? (
					items.map((card) => {
						return (
							<div className="card">
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
