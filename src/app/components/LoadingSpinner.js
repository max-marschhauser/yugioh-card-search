import React from "react";

export default function Loading() {
	return (
		<div className="container--loading">
			<div className="spinner">
				Loading...
				<div className="spinner__sector spinner__sector--red"></div>
				<div className="spinner__sector spinner__sector--green"></div>
				<div className="spinner__sector spinner__sector--blue"></div>
			</div>
		</div>
	);
}
