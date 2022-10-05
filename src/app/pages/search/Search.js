import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import DisplayCards from "../../components/displayCards/DisplayCards";
import "./search.scss";

export default function Search() {
	const [searchName, setSearchName] = useState("Toon");
	const [type, setType] = useState("");
	let searchForTypes = [];
	const [sort, setSort] = useState("name");
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${type}fname=${searchName}&sort=${sort}`)
			.then((response) => {
				setLoading(false);
				setItems(response.data.data);
			});
	}, [searchName, sort, type]);

	function changeSearchType(searchValue) {
		if (searchForTypes.includes(searchValue)) {
			const index = searchForTypes.indexOf(searchValue);
			if (index > -1) {
				searchForTypes.splice(index, 1);
			}
		} else {
			searchForTypes.push(searchValue);
		}

		console.log(searchForTypes);

		let searchText = "";
		if (searchForTypes === []) {
			setType("");
		}
		/*
		searchText += "type=";
		if (searchForTypes.includes("spell card")) {
			searchText += "spell card";
		}
		if (searchForTypes.includes("trap card")) {
			searchText += "trap card";
		}
		if (searchForTypes.includes("monster")) {
			searchText +=
				"Effect Monster,Flip Effect Monster,Gemini Monster,Normal Monster,Ritual Effect Monster,Ritual Monster,Spirit Monster,Toon Monster,Union Effect Monster,Fusion Monster";
		}
		searchText += "&";

		setType(searchText);*/
	}

	return (
		<>
			<form className="container--filter">
				<div>
					<label htmlFor="cardName">Card name:</label>
					<input
						type="text"
						id="cardName"
						name="cardName"
						placeholder={searchName}
						onChange={(e) => setSearchName(e.target.value)}
					/>
				</div>
				<fieldset>
					<legend>Search for:</legend>
					<div>
						<input
							type="checkbox"
							id="normalMonster"
							name="type"
							value="Normal Monster"
							onChange={(e) => changeSearchType(e.target.value)}
						/>
						<label htmlFor="normalMonster">Normal Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="effectMonster"
							name="type"
							value="Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster"
							onChange={(e) => changeSearchType(e.target.value)}
						/>
						<label htmlFor="effectMonster">Effect Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="ritualFusionMonster"
							name="type"
							value="Ritual Effect Monster,Ritual Monster,Fusion Monster"
							onChange={(e) => changeSearchType(e.target.value)}
						/>
						<label htmlFor="ritualFusionMonster">Ritual Fusion Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="spell"
							name="type"
							value="Spell Card"
							onChange={(e) => changeSearchType(e.target.value)}
						/>
						<label htmlFor="spell">Spell</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="trap"
							name="type"
							value="Trap Card"
							onChange={(e) => changeSearchType(e.target.value)}
						/>
						<label htmlFor="trap">Trap</label>
					</div>
				</fieldset>
				<fieldset>
					<legend>Sort cards by:</legend>
					<div>
						<input
							type="radio"
							id="name"
							name="sort"
							value="name"
							onChange={(e) => setSort(e.target.value)}
						/>
						<label htmlFor="name">Name</label>
					</div>
					<div>
						<input
							type="radio"
							id="atk"
							name="sort"
							value="atk"
							onChange={(e) => setSort(e.target.value)}
						/>
						<label htmlFor="atk">Atk</label>
					</div>
					<div>
						<input
							type="radio"
							id="def"
							name="sort"
							value="def"
							onChange={(e) => setSort(e.target.value)}
						/>
						<label htmlFor="def">Def</label>
					</div>
					<div>
						<input
							type="radio"
							id="level"
							name="sort"
							value="level"
							onChange={(e) => setSort(e.target.value)}
						/>
						<label htmlFor="level">Level</label>
					</div>
				</fieldset>
			</form>
			<div className="container--search">{loading ? <LoadingSpinner /> : <DisplayCards items={items} />}</div>
		</>
	);
}
