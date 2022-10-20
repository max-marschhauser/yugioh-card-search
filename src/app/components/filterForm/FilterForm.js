import React, { useId } from "react";
import changeSearchType from "../../utils/changeSearchType";
import "./filterForm.scss";

export default function FilterForm({ searchChanger, typeChanger, sortChanger }) {
	const id = useId();

	return (
		<form className="container--filter">
			<div className="container--filter--column">
				<label className="noPointer" htmlFor={`${id}-searchWord`}>
					Name / Card effect / Card type:
				</label>
				<input
					type="search"
					id={`${id}-searchWord`}
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
							id={`${id}-normalMonster`}
							name="type"
							value="Normal Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor={`${id}-normalMonster`}>Normal Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id={`${id}-effectMonster`}
							name="type"
							value="Effect Monster,Flip Effect Monster,Gemini Monster,Spirit Monster,Toon Monster,Union Effect Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor={`${id}-effectMonster`}>Effect Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id={`${id}-ritualMonster`}
							name="type"
							value="Ritual Effect Monster,Ritual Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor={`${id}-ritualMonster`}>Ritual Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id={`${id}-fusionMonster`}
							name="type"
							value="Fusion Monster"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor={`${id}-fusionMonster`}>Fusion Monster</label>
					</div>
					<div>
						<input
							type="checkbox"
							id={`${id}-spellCard`}
							name="type"
							value="Spell Card"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor={`${id}-spellCard`}>Spell</label>
					</div>
					<div>
						<input
							type="checkbox"
							id={`${id}-trapCard`}
							name="type"
							value="Trap Card"
							onChange={(e) => typeChanger(changeSearchType(e.target.value))}
						/>
						<label htmlFor={`${id}-trapCard`}>Trap</label>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>Sort cards by:</legend>
				<div className="container--filter--fieldset">
					<div>
						<input
							type="radio"
							id={`${id}-sortName`}
							name="sort"
							value="name"
							onChange={(e) => sortChanger(e.target.value)}
							defaultChecked
						/>
						<label htmlFor={`${id}-sortName`}>Name</label>
					</div>
					<div>
						<input
							type="radio"
							id={`${id}-sortAtk`}
							name="sort"
							value="atk"
							onChange={(e) => sortChanger(e.target.value)}
						/>
						<label htmlFor={`${id}-sortAtk`}>Atk</label>
					</div>
					<div>
						<input
							type="radio"
							id={`${id}-sortDef`}
							name="sort"
							value="def"
							onChange={(e) => sortChanger(e.target.value)}
						/>
						<label htmlFor={`${id}-sortDef`}>Def</label>
					</div>
					<div>
						<input
							type="radio"
							id={`${id}-sortLevel`}
							name="sort"
							value="level"
							onChange={(e) => sortChanger(e.target.value)}
						/>
						<label htmlFor={`${id}-sortLevel`}>Level</label>
					</div>
				</div>
			</fieldset>
		</form>
	);
}
