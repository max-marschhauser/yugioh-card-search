let searchForTypes = [];

export default function changeSearchType(searchValue) {
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

	return searchText;
}
