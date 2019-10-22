import React from "react";
import CollectionOverview from '../../component/collection-overview/collection-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';
import WithSpinner from '../../component/with-spinner/with-spinner.component.jsx';
import { Route } from 'react-router-dom';
import { firestore,convertCollectionsToMap } from '../../firebase.util.js'; 
// redux
import { connect } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop.action.jsx'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class  Shop extends React.Component {
	
	state = {
		loading:true
	};

	componentDidMount(){
		const { updateCollection } = this.props;
		const collectionRef = firestore.collection('collection');
		collectionRef.get().then(snapshot => {
			const collectionMap =  convertCollectionsToMap(snapshot);
			updateCollection(collectionMap);
			this.setState({loading:false});
		},error => console.log(error))
	}
	

	render(){
		const { match } = this.props; 
		const { loading } = this.state;
		return(
		<div className="shop-page">
			<Route 
				exact 
				path={`${match.path}`} 
				render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} 
			/>
			<Route 
				path={`${match.path}/:categoryId`} 
				render={props => <CollectionPageWithSpinner isLoading={loading} {...props}/>} 
			/>
		</div>)
	}
}

const dispatchStateToMaps = dispatch => ({
	updateCollection:collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(
null,
dispatchStateToMaps
)(Shop);