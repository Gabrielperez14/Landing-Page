import React from "react";

const Card = () => {
	return (
		<div className="row">
			<div className="col-12 m-4 p-0">
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://via.placeholder.com/500x325"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title d-flex justify-content-center">
							Card title
						</h5>

						<p className="card-text text-center">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<div className="d-flex justify-content-center">
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
