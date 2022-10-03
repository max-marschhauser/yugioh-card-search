import React from "react";
import "./loadingStyle.scss";

export default function Loading() {
	return (
		<div className="loading--container">
			<div className="spinner">
				Loading...
				<div className="spinner__sector spinner__sector--red"></div>
				<div className="spinner__sector spinner__sector--green"></div>
				<div className="spinner__sector spinner__sector--blue"></div>
			</div>
		</div>
	);
}
