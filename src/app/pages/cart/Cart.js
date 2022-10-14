import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinnerCart from "../../components/loadingSpinnerCart/LoadingSpinnerCart";
import DisplayCart from "../../components/displayCart/DisplayCart";
import "./cart.scss";

export default function Cart() {
	const LOCAL_STORAGE_KEY = "Cart";
	let storage = localStorage.getItem(LOCAL_STORAGE_KEY);
	let cart = [];

	if (storage === null) {
		cart = [];
	} else if (storage.length > 1 && storage.length < 9) {
		cart[0] = storage;
	} else {
		cart = storage.split(",");
	}

	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?startdate=01/01/2001&enddate=1/1/2008&misc=yes`)
			.then((response) => {
				setLoading(false);
				setItems(response.data.data);
			});
	}, []);

	if (cart.length === 0) {
		return (
			<div className="container--page">
				<div className="emptyPageText">Please use search page to add cards to the cart.</div>
			</div>
		);
	} else {
		let cartArray = cart.map((cardId) => {
			return parseInt(cardId);
		});

		return (
			<div className="container--cart">
				{loading ? (
					<LoadingSpinnerCart />
				) : (
					<>
						<div className="cart__items">
							<div className="cart__items__item cart__heading">
								<b>Name</b>
								<b>Card Type</b>
								<b>Type</b>
								<b>Price</b>
								<b>Quantity</b>
								<b>Remove</b>
							</div>
							<DisplayCart items={items} cartArray={cartArray} />
						</div>
						<div className="cart__purchase">Total and Purchase button</div>
					</>
				)}
			</div>
		);
	}
}
