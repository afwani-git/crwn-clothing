import React from "react";
import "./collectionItem.style.scss";
import CoustomButton from '../custom-button/CustomButton.component.jsx';
import { addItem } from '../../redux/cart/cart.action.jsx';
import { connect } from 'react-redux';

const CollectionItem = ({item,addItem}) => {
	const { imageUrl,name,price } = item;
	return (
	<div className="collection-item">
		<div 
			className="image"
			style={{backgroundImage:`url(${imageUrl})`}}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
		<CoustomButton onClick={() => addItem(item)} inverted>
			ADD TO CART
		</CoustomButton>
	</div>
	)}

const mapsDispatchToProps = dispatch => ({
	addItem:item => dispatch(addItem(item)) 
})

export default connect(null,mapsDispatchToProps)(CollectionItem);