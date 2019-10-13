import React from 'react';
import './cart-dropdown.style.scss';
import CostomButton from '../custom-button/CustomButton.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors.jsx';

const CartDropdown = ({cartItems}) => {
	return(
	<div className="cart-dropdown">
		<div className='cart-items'>
			{
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			}
		</div>
		<CostomButton>
			GO TO CHECKOUT
		</CostomButton>
	</div>
	)};

const mapStateToProps = (state) => ({
	cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);