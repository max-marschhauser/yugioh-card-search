import { Outlet, NavLink } from "react-router-dom";
import Footer from "../layout/Footer";

const Layout = () => {
	return (
		<>
			<nav className="navbar">
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/deck">Deck</NavLink>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
