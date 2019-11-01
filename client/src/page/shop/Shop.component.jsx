import React from "react";
import { Route } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.action.jsx';

import CollectionOverviewContainer from '../../component/collection-overview/collection-overview.container.jsx';
import CollectionPageContainer from '../collection/collection.container.jsx';

class  Shop extends React.Component {

	componentDidMount(){
		const { fetchCollectionStart } = this.props;
		fetchCollectionStart();
	}

	render(){
		const { match } = this.props; 
		return(
		<div className="shop-page">
			<Route 
				exact 
				path={`${match.path}`} 
				component={CollectionOverviewContainer} 
			/>
			<Route 
				path={`${match.path}/:categoryId`} 
				component={CollectionPageContainer}
			/>
		</div>)
	}
}

const mapsDispatchToProps = dispatch => ({
	fetchCollectionStart:() => dispatch(fetchCollectionStart())
})

export default connect(
null,
mapsDispatchToProps
)(Shop);