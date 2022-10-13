import React from "react";
import "./loadingSpinnerSearch.scss";

export default function Loading() {
	return (
		<>
			<div className="spinner--search">
				Loading...
				<div className="spinner--search__sector spinner--search__sector--red"></div>
				<div className="spinner--search__sector spinner--search__sector--green"></div>
				<div className="spinner--search__sector spinner--search__sector--blue"></div>
			</div>
		</>
	);
}
