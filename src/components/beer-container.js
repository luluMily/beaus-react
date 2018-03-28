import React from 'react';
import beers from '../data/beers';
// import BeerList from './components/beer-list';
// import BeerDetail from './components/beer-detail';

class BeerDetail extends React.Component {
	render() {
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
	}
}

class BeerItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.selectBeerFromList(this.props.beer);
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

class BeerList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const lists = [];
		this.props.beers.forEach((beer) => {
			lists.push(
				<BeerItem beer={beer} key={beer.id} selectBeerFromList={this.props.selectBeer}/>
			)
		})
		return (
			<ul className="list-group col-sm-4">{lists}</ul>
		)
	}

}

class BeerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleSelectBeer = this.handleSelectBeer.bind(this);
		this.state = {
			beers: [],
			selectedBeer: []
		}
	}

	componentDidMount() {
		const KEY = "MDpiNmM2NjY3ZS0yYTU3LTExZTgtOWE2Ny1jYjk2YzY5Mjc3Y2M6ckxlUWhDdG1tZzVXOEM0YXRreWxJV1BEZ3RhaTJCVWFLUEg3";
		fetch(`https://lcboapi.com/products?access_key=${KEY}&q=beaus&where=is_seasonal`)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({beers: result.result})
			}
		)
	}

	handleSelectBeer(selectedBeer) {
		this.setState({selectedBeer: selectedBeer});
	}

	render() {
		return (
			<div className="container">
				<BeerList beers={this.state.beers} selectBeer={this.handleSelectBeer} />
				<BeerDetail beer={this.state.selectedBeer} />
			</div>
		)
	}

}

export default BeerContainer;
