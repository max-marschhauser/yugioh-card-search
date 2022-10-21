// page layout and navbar shared on every page

import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import "./layout.scss";

const Navbar = () => {
	let [storage, setStorage] = useState({ ...localStorage });
	let storageIds = Object.keys(storage);

	useEffect(() => {
		window.addEventListener("storageChanged", () => {
			setStorage({ ...localStorage });
		});
	}, []);

	return (
		<div className="pageContainer" id="top">
			<nav className="navbar">
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/cart">
					Cart <span className="navbar__cart--number">{storageIds.length}</span>
				</NavLink>
			</nav>
			<Outlet />
			<Footer />
			<a href="#top" className="backToTopButton">
				Back to top
			</a>
		</div>
	);
};

export default Navbar;
