import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout//navbar/Navbar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/noPage/NoPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
