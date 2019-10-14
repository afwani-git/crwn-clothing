import React from 'react';
import CheckoutItem from '../checkout-item/CheckoutItem.component.jsx';
// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors.jsx';
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors.jsx';
// style
import './checkout.style.scss'

const Checkout = ({items,total}) => {
	console.log(items);
	return (
	<div className='checkout-page'>
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
			{
				items.map(item => (
					<CheckoutItem key={item.id} cartItems={item} />
				))
			}
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
	</div>
)}

const mapStateToProps = createStructuredSelector({
		items:selectCartItems,
		total:selectCartItemsTotal	
	})

export default connect(mapStateToProps)(Checkout);
