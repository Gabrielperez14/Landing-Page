import React from "react";

const Card = () => {
	return (
		<div className="card">
			<img
				src="https://via.placeholder.com/400x200"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body d-flex flex-column align-items-center">
				<h5 className="card-title">Card title</h5>
				<p className="card-text text-center">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
