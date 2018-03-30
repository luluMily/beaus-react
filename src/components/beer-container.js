import React from 'react';
import BeerItem from './beer-item';
import BeerDetail from './beer-detail';

class BeerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleSelectBeer = this.handleSelectBeer.bind(this);
		this.state = {
			beers: [],
			selectedBeer: {}
		}
	}

	componentDidMount() {
		const KEY = "MDpiNmM2NjY3ZS0yYTU3LTExZTgtOWE2Ny1jYjk2YzY5Mjc3Y2M6ckxlUWhDdG1tZzVXOEM0YXRreWxJV1BEZ3RhaTJCVWFLUEg3";
		fetch(`https://lcboapi.com/products?access_key=${KEY}&q=beaus&where=is_seasonal&per_page=30`)
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
		const beerList = [];

		this.state.beers.forEach((beer) => {
			beerList.push(
				<BeerItem beer={beer} key={beer.id} selectBeer={this.handleSelectBeer}/>
			)
		})

		return (
			<div className="row top-level-container">
				<BeerDetail beer={this.state.selectedBeer} />
				<div className="col-sm-12 col-md-4 order-md-1">
					<ul className="list-group">{beerList}</ul>
				</div>
			</div>
		)
	}
}

export default BeerContainer;
