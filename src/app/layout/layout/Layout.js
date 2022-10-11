import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import "./layout.scss";

const Navbar = () => {
	return (
		<div className="pageContainer">
			<nav className="navbar">
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/cart">Cart</NavLink>
			</nav>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Navbar;
