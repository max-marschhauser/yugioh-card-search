// footer shared on every page

import React from "react";
import "./footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div>
				<span>&nbsp;Page Author:&nbsp;</span>
				<br />
				Max Marschhauser
			</div>
			<div>
				<span>&nbsp;Yu-Gi-Oh! search database!&nbsp;</span>
				<br />
				Copyright &copy;{+new Date().getFullYear()}.
			</div>
			<div>
				<span>&nbsp;e-mail:&nbsp;</span>
				<br />
				max.marschhauser
				<wbr />
				@gmail.com
			</div>
		</footer>
	);
}
