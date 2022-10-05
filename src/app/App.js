import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout//navbar/Navbar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Deck from "./pages/deck/Deck";
import NoPage from "./pages/noPage/NoPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/deck" element={<Deck />} />
					<Route path="/*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
