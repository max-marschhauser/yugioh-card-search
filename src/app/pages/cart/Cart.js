import React from "react";
import "./cart.scss";

export default function Cart() {
	const LOCAL_STORAGE_KEY = "Cart";
	let storage = localStorage.getItem(LOCAL_STORAGE_KEY);
	let cart = [];

	if (storage === null) {
		cart = [];
	} else if (storage.length === 8) {
		cart[0] = storage;
	} else {
		cart = storage.split(",");
	}

	console.log(cart);

	return <div></div>;
}
