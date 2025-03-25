import React, {useState} from "react";
import "./Navbar.css";

const Navbar = ({onCategoryChange}) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const categories = [
		"General",,
		"Business",
		"Politics",
		"Sports",
		"Entertainment",
		"Health",
		"Science"
	];

	return (
		<nav className="navbar">
			<h1 className="logo">News App</h1>
			<button className="hamburger"
				onClick={
					() => setMenuOpen(!menuOpen)
			}>
				☰
			</button>

			<ul className={
				`nav-links ${
					menuOpen ? "open" : ""
				}`
			}>
				{
				categories.map((category) => (
					<li key={category}>
						<button onClick={
								() => {
									onCategoryChange(category.toLowerCase());
									setMenuOpen(false);
								}
							}
							className="nav-item">
							{category} </button>
					</li>
				))
			} </ul>
		</nav>
	);
};

export default Navbar;
