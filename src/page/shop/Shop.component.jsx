import React from "react";
import CollectionOverview from '../../component/collection-overview/collection-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';
import WithSpinner from '../../component/with-spinner/with-spinner.component.jsx';
import { Route } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action.jsx';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionFetching } from '../../redux/shop/shop.selector.jsx'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class  Shop extends React.Component {

	componentDidMount(){
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}
	

	render(){
		const { match,isCollectionFetching } = this.props; 
		return(
		<div className="shop-page">
			<Route 
				exact 
				path={`${match.path}`} 
				render={props => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} 
			/>
			<Route 
				path={`${match.path}/:categoryId`} 
				render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>} 
			/>
		</div>)
	}
}

const mapsDispatchToProps = dispatch => ({
	fetchCollectionStartAsync:() => dispatch(fetchCollectionStartAsync())
})

const mapsStateToProps =  createStructuredSelector({
	isCollectionFetching:selectShopCollectionFetching,
})

export default connect(
mapsStateToProps,
mapsDispatchToProps
)(Shop);