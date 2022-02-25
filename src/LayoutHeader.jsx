import React from "react";
import { Link } from "react-router-dom";
function LayoutHeader({ title, button, buttonLink }) {
	return (
		<h1 className="main--title">
			{title && <span>{title}</span>}
			{button && (
				<Link to={buttonLink} className="create-btn">
					{button}
				</Link>
			)}
		</h1>
	);
}

export default LayoutHeader;
