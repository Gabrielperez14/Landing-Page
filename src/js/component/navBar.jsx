import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
			<div className="container-fluid justify-content-around">
				<a className="navbar-brand text-white me-5" href="#">
					Start Bootstrap
				</a>
				<div className="d-flex justify-content-around">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item ">
								<a
									className="nav-link active text-white"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
