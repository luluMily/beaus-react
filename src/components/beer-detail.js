import React from 'react';
import Home from './home';

class BeerDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: []
		}
	}

	componentDidMount() {
		this.fetchStores(this.props.beer)
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.beer.id !== nextProps.beer.id) {
			this.fetchStores(nextProps.beer.id);
		}
	}

	fetchStores(beerId) {
		const KEY = "MDpiNmM2NjY3ZS0yYTU3LTExZTgtOWE2Ny1jYjk2YzY5Mjc3Y2M6ckxlUWhDdG1tZzVXOEM0YXRreWxJV1BEZ3RhaTJCVWFLUEg3";
		fetch(`https://lcboapi.com/stores?access_key=${KEY}&product_id=${beerId}&per_page=10`)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({stores: result.result})
			}
		)
	}

	render() {
		if (Object.keys(this.props.beer).length !== 0) {
			const image = this.props.beer.image_url ? <img src={this.props.beer.image_url} alt="Card image cap" /> : <img />;

			const storeList = [];

			this.state.stores.forEach((store) => {
				storeList.push(
					<li key={store.id} className="store-item">
						<div>{store.name}</div>
						<i>Story ID {store.id}</i>
						<p>{store.address_line_1}, {store.address_line_2}</p>
						<p>{store.city} {store.postal_code}</p>
						<p>{store.telephone}</p>
					</li>
				)
			})

			return (
				<div className="beer-detail col-sm-12 col-md-8 order-md-4">
					<div className="detail-main card">
						<div className="row">
							<div className="col-sm-5">{image}</div>
							<div className="card-body col-sm-7">
								<h2 className="card-title">{this.props.beer.name}</h2>
								<i className="beer-id">ID {this.props.beer.id}</i>
								<p className="price">${this.props.beer.regular_price_in_cents / 100}</p>
								<div className="style">
									<p>{this.props.beer.style}</p>
									<p>{this.props.beer.tasing_note}</p>
								</div>
								<div className="beer-info">
									<p>{this.props.beer.package}</p>
									<p>{this.props.beer.serving_suggestion}</p>
									<p>Varietal: {this.props.beer.varietal}</p>
									<p>Tertiary Category: {this.props.beer.tertiary_category}</p>
									<p>Origin: {this.props.beer.origin}</p>
									<p>Producer: {this.props.beer.producer_name}</p>
								</div>
							</div>
						</div>
						<div className="store-item-dividen"></div>
						<h4>Stores</h4>
						<ul className="store-list">{storeList}</ul>
					</div>
				</div>
			);
		} else {
			return (
				<Home />
			)
		}
	}
}

export default BeerDetail;
