import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary">
			<div className="container">
				<a className="navbar-brand text-white" href="#">
					Navbar
				</a>
				<div className="ml-auto">
					<div className="navbar- d-flex flex-row">
						<a
							className="nav-link active text-white"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link text-white" href="#">
							About
						</a>
						<a className="nav-link text-white" href="#">
							Services
						</a>
						<a className="nav-link text-white">Contact</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
