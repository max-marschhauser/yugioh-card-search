import React from "react";
import changeSearchType from "../../utils/changeSearchType";
import "./filterForm.scss";

export default function FilterForm({ searchChanger, typeChanger, sortChanger }) {
	return (
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
					onChange={(e) => searchChanger(e.target.value)}
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
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor="normalMonster">Normal Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="effectMonster"
							name="type"
							value="Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor="effectMonster">Effect Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="ritualMonster"
							name="type"
							value="Ritual Effect Monster,Ritual Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor="ritualMonster">Ritual Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="fusionMonster"
							name="type"
							value="Fusion Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor="fusionMonster">Fusion Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="spell"
							name="type"
							value="Spell Card"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor="spell">Spell</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="trap"
							name="type"
							value="Trap Card"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
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
							onChange={(e) => sortChanger(e.target.value)}
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
							onChange={(e) => sortChanger(e.target.value)}
						/>
						<label htmlFor="atk">Atk</label>
					</div>
					<div>
						<input
							type="radio"
							id="def"
							name="sort"
							value="def"
							onChange={(e) => sortChanger(e.target.value)}
						/>
						<label htmlFor="def">Def</label>
					</div>
					<div>
						<input
							type="radio"
							id="level"
							name="sort"
							value="level"
							onChange={(e) => sortChanger(e.target.value)}
						/>
						<label htmlFor="level">Level</label>
					</div>
				</div>
			</fieldset>
		</form>
	);
}
