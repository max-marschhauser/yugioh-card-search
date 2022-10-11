import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import DisplayCards from "../../components/displayCards/DisplayCards";
import "./search.scss";
import changeSearchType from "../../utils/changeSearchType";

export default function Search() {
	const [items, setItems] = useState([]);

	const [searchWord, setSearchWord] = useState("");
	const [sort, setSort] = useState("name");
	const [type, setType] = useState(
		"type=Normal Monster,Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster,Ritual Effect Monster,Ritual Monster,Fusion Monster,Spell Card,Trap Card&"
	);

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
			<form className="container--filter">
				<div className="container--filter--column">
					<label className="noPointer" htmlFor="searchWord">
						Name / Card effect / Card type:
					</label>
					<input
						type="text"
						id="searchWord"
						name="searchWord"
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
								onChange={(e) => setType(changeSearchType(e.target.value))}
							/>
							<label htmlFor="normalMonster">Normal Monster</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="effectMonster"
								name="type"
								value="Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster"
								onChange={(e) => setType(changeSearchType(e.target.value))}
							/>
							<label htmlFor="effectMonster">Effect Monster</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="ritualMonster"
								name="type"
								value="Ritual Effect Monster,Ritual Monster"
								onChange={(e) => setType(changeSearchType(e.target.value))}
							/>
							<label htmlFor="ritualMonster">Ritual Monster</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="fusionMonster"
								name="type"
								value="Fusion Monster"
								onChange={(e) => setType(changeSearchType(e.target.value))}
							/>
							<label htmlFor="fusionMonster">Fusion Monster</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="spell"
								name="type"
								value="Spell Card"
								onChange={(e) => setType(changeSearchType(e.target.value))}
							/>
							<label htmlFor="spell">Spell</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="trap"
								name="type"
								value="Trap Card"
								onChange={(e) => setType(changeSearchType(e.target.value))}
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
			;
		</>
	);
}
