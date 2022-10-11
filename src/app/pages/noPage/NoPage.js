import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./noPage.scss";

export default function NoPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	}, []);

	return (
		<div className="container--page">
			<h1 className="noPageText">No such page found, redirecting back to home page!</h1>
		</div>
	);
}
