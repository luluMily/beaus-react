import React from 'react';

class BeerDetail extends React.Component {
	render() {
		if (Object.keys(this.props.beer).length !== 0) {
			const name = this.props.beer.name;
			const image = this.props.beer.image_url;
			const style = this.props.beer.style;
			const price = this.props.beer.regular_price_in_cents;

			return (
				<div className="card col-sm-8">
					<img className="col-sm-5" src={image} alt="Card image cap" />
					<div className="card-body col-sm-7">
						<h3 className="card-title">{name}</h3>
						<p>${price / 100}</p>
						<p className="card-text">{style}</p>
					</div>
				</div>
			);
		} else {
			return (
				<h1>Welcome to Beaus</h1>
			)
		}
	}
}

export default BeerDetail;
