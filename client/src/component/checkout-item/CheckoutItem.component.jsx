import React from 'react';
import './checkout-item.style.scss';
// redux
import { connect } from 'react-redux';
import { clearItem,removeItem } from '../../redux/cart/cart.action.jsx';
import { addItem } from '../../redux/cart/cart.action.jsx'

const CheckoutItem = ({cartItems,clearItem,removeItem,addItemToCart,addItem}) => {
	const {imageUrl,name,price,quantity} = cartItems
	return(
	<div className="checkout-item">
		<div className="image-container">
			<img alt='item'  src={imageUrl}/>
		</div>
		<span className='name'>{name}</span>
		<span className='quantity'>
			<div className="arrow" onClick={() => addItem(cartItems)}>&#10094;</div>
			 <span className="value">{quantity}</span>
			<div className="arrow" onClick={() => removeItem(cartItems)}>&#10095;</div>
		</span>
		<span className='price'>{price}</span>
		<span className='remove-button' onClick={() => clearItem(cartItems)}>&#10005;</span>
	</div>
)}

const mapsDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItem(item)),
	removeItem:item => dispatch(removeItem(item)),
	addItem:item => dispatch(addItem(item))
})

export default connect(null,mapsDispatchToProps)(CheckoutItem);