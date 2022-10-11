import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import "./navbar.scss";

const Navbar = () => {
	const LOCAL_STORAGE_KEY = "myDeck";

	let [selectedCards, setSelectedCards] = useState();

	useEffect(() => {
		let myDeck = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (myDeck === null) {
			setSelectedCards([]);
		} else if (myDeck.length === 8) {
			setSelectedCards(parseInt(myDeck));
		} else {
			setSelectedCards(parseInt(myDeck));
		}
	}, []);

	return (
		<>
			<nav className="navbar">
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/cart">
					Cart <span className="navbar__notification">{selectedCards}</span>
				</NavLink>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
};

export default Navbar;
