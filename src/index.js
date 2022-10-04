import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/assets/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
