import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import DisplayCards from "../../components/displayCards/DisplayCards";
import "./search.scss";

let searchForTypes = [];

export default function Search() {
	/*
	const [searchWord, setSearchWord] = useState("");
	const [type, setType] = useState(
		"type=Normal Monster,Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster,Ritual Effect Monster,Ritual Monster,Fusion Monster,Spell Card,Trap Card&"
	);
	const [sort, setSort] = useState("name");
	const [items, setItems] = useState([]);
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
				alert(
					"There is no such card in database, change your search options. Please notice that this version of application only includes TCG Yu-Gi-Oh cards released until 1. 1. 2008. We are planing to add more cards in newer versions of app."
				);
			});
	}, [sort, type]);

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
		if (searchForTypes.length === 6) {
			searchText = `type=${searchForTypes[0]},${searchForTypes[1]},${searchForTypes[2]},${searchForTypes[3]},${searchForTypes[4]},${searchForTypes[5]}&`;
		}

		setType(searchText);
	}

	return (
		<>
			<form className="container--filter">
				<div className="container--filter--column">
					<label className="noPointer" htmlFor="searchWord">
						Name / Card effect / Card type:
					</label>
					<input
						type="text"
						id="searchWord"
						name="searchWord"
						value={searchWord}
						placeholder="search cards"
						onChange={(e) => setSearchWord(e.target.value)}
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
								id="ritualMonster"
								name="type"
								value="Ritual Effect Monster,Ritual Monster"
								onChange={(e) => changeSearchType(e.target.value)}
							/>
							<label htmlFor="ritualMonster">Ritual Monster</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="fusionMonster"
								name="type"
								value="Fusion Monster"
								onChange={(e) => changeSearchType(e.target.value)}
							/>
							<label htmlFor="fusionMonster">Fusion Monster</label>
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
					<legend>Sort cards by:</legend>
					<div className="container--filter--fieldset">
						<div>
							<input
								type="radio"
								id="name"
								name="sort"
								value="name"
								onChange={(e) => setSort(e.target.value)}
								defaultChecked
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
				{loading ? <LoadingSpinner /> : <DisplayCards items={items} searchWord={searchWord} />}
			</div>
		</>
	);*/
}
