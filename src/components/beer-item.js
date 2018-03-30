import React from 'react';

class BeerItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.selectBeer(this.props.beer);
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}

	render() {
		const name = this.props.beer.name;
		const thumb_url = this.props.beer.image_thumb_url;
		const thumb = this.props.beer.image_thumb_url ? <img src={thumb_url} alt={name} /> : <img />;

		return (
			<li key={this.props.beer.id} className="list-group-item beer-item" onClick={this.handleClick}>
				<div className="row">
					<div className="card-img-left col-sm-4 beer-thumb">{thumb}</div>
					<div className="card-body col-sm-8">
						<h5 className="card-title">{name}</h5>
						<i className="card-text">{this.props.beer.style}</i><br />
						<i>${this.props.beer.regular_price_in_cents / 100}</i>
					</div>
				</div>
			</li>
		)
	}
}

export default BeerItem;
