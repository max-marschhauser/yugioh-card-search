import React from "react";
import "./loadingSpinner.scss";

export default function Loading() {
	return (
		<>
			<div></div>
			<div className="spinner">
				Loading...
				<div className="spinner__sector spinner__sector--red"></div>
				<div className="spinner__sector spinner__sector--green"></div>
				<div className="spinner__sector spinner__sector--blue"></div>
			</div>
		</>
	);
}
