import React from 'react';

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
			const name = this.props.beer.name;
			const image = this.props.beer.image_url;
			const style = this.props.beer.style;
			const price = this.props.beer.regular_price_in_cents;

			const storeList = [];

			this.state.stores.forEach((store) => {
				storeList.push(
					<li>
						<h5>{store.name}</h5>
						<i>{store.id}</i>
						<p>{store.address_line_1}</p>
						<p>{store.address_line_2}</p>
						<p>{store.city} {store.postal_code}</p>
						<p>{store.telephone}</p>
					</li>
				)
			})

			return (
				<div className="card col-sm-8">
					<div className="container">
						<img className="col-sm-5" src={image} alt="Card image cap" />
						<div className="card-body col-sm-7">
							<h3 className="card-title">{name}</h3>
							<p>${price / 100}</p>
							<p className="card-text">{style}</p>
						</div>
					</div>
					<ul>{storeList}</ul>
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
