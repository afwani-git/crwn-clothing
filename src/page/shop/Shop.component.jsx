import React from "react";
import CollectionOverview from '../../component/collection-overview/collection-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';
import { Route } from 'react-router-dom'

const Shop = ({match}) => {
	return (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionOverview}/>
		<Route  path={`${match.path}/:categoryId`} component={CollectionPage}/>
	</div>
)}

export default Shop;