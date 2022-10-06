import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import DisplayCards from "../../components/displayCards/DisplayCards";
import "./search.scss";

let searchForTypes = [];
let searchForAttributes = [];

export default function Search() {
	const [searchName, setSearchName] = useState("Elemental");
	const [effectRaceSearch, setEffectRaceSearch] = useState("");
	const [attribute, setAttribute] = useState("attribute=dark,light,earth,wind,fire,water,divine&");
	const [type, setType] = useState(
		"type=Normal Monster,Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster,Ritual Effect Monster,Ritual Monster,Fusion Monster,Spell Card,Trap Card&"
	);
	const [sort, setSort] = useState("name");
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${type}${attribute}fname=${searchName}&sort=${sort}`)
			.then((response) => {
				setLoading(false);
				setItems(response.data.data);
			})
			.catch(() => {
				alert("There is no such card in database");
				setSearchName("");
			});
	}, [searchName, sort, type, attribute]);

	function changeSearchType(searchValue) {
		let searchText = "";

		if (searchForTypes.includes(searchValue)) {
			const index = searchForTypes.indexOf(searchValue);
			if (index > -1) {
				searchForTypes.splice(index, 1);
			}
		} else {
			searchForTypes.push(searchValue);
		}

		if (searchForTypes.length === 0) {
			searchText =
				"type=Normal Monster,Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster,Ritual Effect Monster,Ritual Monster,Fusion Monster,Spell Card,Trap Card&";
		}
		if (searchForTypes.length === 1) {
			searchText = `type=${searchForTypes[0]}&`;
		}
		if (searchForTypes.length === 2) {
			searchText = `type=${searchForTypes[0]},${searchForTypes[1]}&`;
		}
		if (searchForTypes.length === 3) {
			searchText = `type=${searchForTypes[0]},${searchForTypes[1]},${searchForTypes[2]}&`;
		}
		if (searchForTypes.length === 4) {
			searchText = `type=${searchForTypes[0]},${searchForTypes[1]},${searchForTypes[2]},${searchForTypes[3]}&`;
		}
		if (searchForTypes.length === 5) {
			searchText = `type=${searchForTypes[0]},${searchForTypes[1]},${searchForTypes[2]},${searchForTypes[3]},${searchForTypes[4]}&`;
		}

		setType(searchText);
	}

	function changeSearchAttribute(searchValue) {
		let searchText = "";

		if (searchForAttributes.includes(searchValue)) {
			const index = searchForAttributes.indexOf(searchValue);
			if (index > -1) {
				searchForAttributes.splice(index, 1);
			}
		} else {
			searchForAttributes.push(searchValue);
		}

		if (searchForAttributes.length === 0) {
			searchText = "attribute=dark,light,earth,wind,fire,water,divine&";
		}
		if (searchForAttributes.length === 1) {
			searchText = `attribute=${searchForAttributes[0]}&`;
		}
		if (searchForAttributes.length === 2) {
			searchText = `attribute=${searchForAttributes[0]},${searchForAttributes[1]}&`;
		}
		if (searchForAttributes.length === 3) {
			searchText = `attribute=${searchForAttributes[0]},${searchForAttributes[1]},${searchForAttributes[2]}&`;
		}
		if (searchForAttributes.length === 4) {
			searchText = `attribute=${searchForAttributes[0]},${searchForAttributes[1]},${searchForAttributes[2]},${searchForAttributes[3]}&`;
		}
		if (searchForAttributes.length === 5) {
			searchText = `attribute=${searchForAttributes[0]},${searchForAttributes[1]},${searchForAttributes[2]},${searchForAttributes[3]},${searchForAttributes[4]}&`;
		}
		if (searchForAttributes.length === 6) {
			searchText = `attribute=${searchForAttributes[0]},${searchForAttributes[1]},${searchForAttributes[2]},${searchForAttributes[3]},${searchForAttributes[4]},${searchForAttributes[5]}&`;
		}
		if (searchForAttributes.length === 7) {
			searchText = `attribute=${searchForAttributes[0]},${searchForAttributes[1]},${searchForAttributes[2]},${searchForAttributes[3]},${searchForAttributes[4]},${searchForAttributes[5]},${searchForAttributes[6]}&`;
		}

		setAttribute(searchText);
	}

	return (
		<>
			<form className="container--filter">
				<div className="container--filter--column">
					<label htmlFor="cardName">Card name:</label>
					<input
						type="text"
						id="cardName"
						name="cardName"
						value={searchName}
						placeholder="search by card name"
						onChange={(e) => setSearchName(e.target.value)}
					/>
					<label htmlFor="effectRaceText">Card effect / Card type:</label>
					<input
						type="text"
						id="effectRaceText"
						name="effectRaceText"
						value={effectRaceSearch}
						placeholder="search by effect or type"
						onChange={(e) => setEffectRaceSearch(e.target.value)}
					/>
				</div>
				<fieldset>
					<legend>Search for:</legend>
					<div className="container--filter--fieldset">
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
							<label htmlFor="ritualFusionMonster">Ritual/Fusion Monster</label>
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
					</div>
				</fieldset>
				<fieldset>
					<legend>Monster attribute:</legend>
					<div className="container--filter--fieldset">
						<div>
							<input
								type="checkbox"
								id="light"
								name="attribute"
								value="light"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="light">Light</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="dark"
								name="attribute"
								value="dark"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="dark">Dark</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="earth"
								name="attribute"
								value="earth"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="earth">Earth</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="water"
								name="attribute"
								value="water"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="water">Water</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="fire"
								name="attribute"
								value="fire"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="fire">Fire</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="wind"
								name="attribute"
								value="wind"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="wind">Wind</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="divine"
								name="attribute"
								value="divine"
								onChange={(e) => changeSearchAttribute(e.target.value)}
							/>
							<label htmlFor="divine">Divine</label>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend>Sort cards by:</legend>
					<div className="container--filter--fieldset">
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
					</div>
				</fieldset>
			</form>
			<div className="container--search">
				{loading ? <LoadingSpinner /> : <DisplayCards items={items} effectRaceSearch={effectRaceSearch} />}
			</div>
		</>
	);
}
