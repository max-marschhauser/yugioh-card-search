import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Loading from "./Loading";
import Footer from "./Footer";
import DisplayCards from "./DisplayCards";

function App() {
	const [searchName, setSearchName] = useState("Toon");
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [urlLink, setUrlLink] = useState(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchName}`);

	useEffect(() => {
		setLoading(true);
		axios.get(urlLink).then((response) => {
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

			{loading ? <Loading /> : <DisplayCards items={items} />}
			<Footer />
		</>
	);
}

export default App;
