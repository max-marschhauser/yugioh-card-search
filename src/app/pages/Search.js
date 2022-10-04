import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import DisplayCards from "../components/DisplayCards";

export default function Search() {
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
			<div className="container--filter">
				<input type="text" placeholder={searchName} onChange={(e) => setSearchName(e.target.value)} />
			</div>
			<div className="container--search">{loading ? <LoadingSpinner /> : <DisplayCards items={items} />}</div>
		</>
	);
}
