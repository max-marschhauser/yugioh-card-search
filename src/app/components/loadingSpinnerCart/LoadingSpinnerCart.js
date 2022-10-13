import React from "react";
import "./loadingSpinnerCart.scss";

export default function Loading() {
	return (
		<>
			<div className="spinner--cart">
				Loading...
				<div className="spinner--cart__sector spinner--cart__sector--red"></div>
				<div className="spinner--cart__sector spinner--cart__sector--green"></div>
				<div className="spinner--cart__sector spinner--cart__sector--blue"></div>
			</div>
		</>
	);
}
