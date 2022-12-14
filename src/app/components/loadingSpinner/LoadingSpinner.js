// component for displaying loading spinner on search and cart page

import React from "react";
import "./loadingSpinner.scss";

export default function Loading() {
	return (
		<>
			<div className="spinner">
				Loading...
				<div className="spinner__sector spinner__sector--red"></div>
				<div className="spinner__sector spinner__sector--green"></div>
				<div className="spinner__sector spinner__sector--blue"></div>
			</div>
		</>
	);
}
