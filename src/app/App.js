import { useState, useEffect } from "react";
import "./assets/styles.scss";
import axios from "axios";
import Loading from "./components/LoadingSpinner";
import Footer from "./components/Footer";
import DisplayCards from "./components/DisplayCards";

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

			{loading ? <Loading /> : <DisplayCards items={items} />}
			<Footer />
		</>
	);
}

export default App;
