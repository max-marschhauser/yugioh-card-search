import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import "./layout.scss";

const Navbar = () => {
	return (
		<div className="pageContainer" id="top">
			<nav className="navbar">
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/cart">Cart</NavLink>
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
