import React from "react";
import Navbar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />

			<div className="container p-0">
				<Jumbotron />

				<div className="list-cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
