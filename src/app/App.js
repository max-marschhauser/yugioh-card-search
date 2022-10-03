import { useState, useEffect } from "react";
import "./assets/styles.scss";
import axios from "axios";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import LoadingSpinner from "./components/LoadingSpinner";
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
			<Header />
			<div>
				<input type="text" placeholder={searchName} onChange={(e) => setSearchName(e.target.value)} />
			</div>
			{loading ? <LoadingSpinner /> : <DisplayCards items={items} />}
			<Footer />
		</>
	);
}

export default App;
