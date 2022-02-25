import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
const Navbar = () => {
	return (
		<header className="App-header">
			<Link to="/">
				<img src={logo} className="App-logo" alt="logo" />
			</Link>
			<Link
				className="App-link"
				to="/https://reactjs.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</Link>
		</header>
	);
};

export default Navbar;
