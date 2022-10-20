import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import DisplayCart from "../../components/displayCart/DisplayCart";
import PurchaseSection from "../../components/purchaseSection/PurchaseSection";
import "./cart.scss";

export default function Cart() {
	const storage = { ...localStorage };
	let [storageIds, useStorageIds] = useState(Object.keys(storage));

	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([]);

	function HandleStorageChange(newIds) {
		useStorageIds(newIds);
	}

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?startdate=01/01/2001&enddate=1/1/2008&misc=yes`)
			.then((response) => {
				setLoading(false);
				setItems(response.data.data);
			});
	}, []);

	let storageIdsNum = storageIds.map((cardId) => {
		return parseInt(cardId);
	});

	return (
		<div className="container--cart">
			{loading ? (
				<div className="container--loading">
					<LoadingSpinner />
				</div>
			) : (
				<>
					<div className="cart__items">
						<div className="cart__items__item cart__heading">
							<b>NAME</b>
							<b>TYPE</b>
							<b>PRICE</b>
							<b>QUANTITY</b>
							<b>REMOVE</b>
						</div>
						<DisplayCart
							items={items}
							storageIdsNum={storageIdsNum}
							HandleStorageChange={HandleStorageChange}
						/>
					</div>
					<PurchaseSection
						items={items}
						storageIdsNum={storageIdsNum}
						HandleStorageChange={HandleStorageChange}
					/>
				</>
			)}
		</div>
	);
}
