import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import DisplayCards from "../../components/displayCards/DisplayCards";
import FilterForm from "../../components/filterForm/FilterForm";
import "./search.scss";

export default function Search() {
	const [items, setItems] = useState([]);

	const [searchWord, setSearchWord] = useState("");
	const [sort, setSort] = useState("name");
	const [type, setType] = useState(
		"type=Normal Monster,Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster,Ritual Effect Monster,Ritual Monster,Fusion Monster,Spell Card,Trap Card&"
	);

	function HandleSearchWord(newWord) {
		setSearchWord(newWord);
	}

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php?${type}&sort=${sort}&startdate=01/01/2001&enddate=1/1/2008&misc=yes`
			)
			.then((response) => {
				setLoading(false);
				setItems(response.data.data);
			})
			.catch(() => {
				alert("There is no such card in database, change your search options.");
			});
	}, [sort, type]);

	return (
		<>
			<FilterForm searchChanger={HandleSearchWord} typeChanger={setType} sortChanger={setSort} />
			<div className="container--search">
				{loading ? (
					<div className="container--loading">
						<LoadingSpinner />
					</div>
				) : (
					<DisplayCards items={items} searchWord={searchWord} />
				)}
			</div>
		</>
	);
}
