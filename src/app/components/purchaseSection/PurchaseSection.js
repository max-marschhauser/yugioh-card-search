import React from "react";
import "./purchaseSection.scss";

export default function PurchaseSection({ items, storageIdsNum, useStorageIds }) {
	const storage = { ...localStorage };

	return (
		<>
			<div className="cart__purchase">
				Total and Purchase button
				<div>price</div>
			</div>
		</>
	);
}
