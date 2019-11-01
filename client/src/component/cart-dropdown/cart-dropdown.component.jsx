import React from 'react';
// component
import CostomButton from '../custom-button/CustomButton.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
// route
import { withRouter } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.jsx';
// style
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems,history,dispatch}) => {
	return(
	<div className="cart-dropdown">
		<div className='cart-items'>
			{
				cartItems.length ? (
				cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
				):(
					<span className="empty-message">
						your cart is empty
					</span>
				)
			}
		</div>
		<CostomButton onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>
			GO TO CHECKOUT
		</CostomButton>
	</div>
	)};

const mapStateToProps = (state) => ({
	cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));