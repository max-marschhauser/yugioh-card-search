// page is displayed if there is no valid url link

import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NoPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	});

	return (
		<div className="container--page">
			<h1 className="emptyPageText">No such page found, redirecting back to home page!</h1>
		</div>
	);
}
