import React from 'react';

class BeerItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.selectBeer(this.props.beer);
	}

	render() {
		const name = this.props.beer.name;
		const thumb = this.props.beer.image_thumb_url;
		const style = this.props.beer.style;

		return (
			<li key={this.props.beer.id} className="list-group-item" onClick={this.handleClick}>
				<div className="card row">
					<img className="card-img-left col-sm-5 beer-thumb" src={thumb} alt={name} />
					<div className="card-body col-sm-7">
						<h4 className="card-title">{name}</h4>
						<p className="card-text">{style}</p>
					</div>
				</div>
			</li>
		)
	}
}

export default BeerItem;
