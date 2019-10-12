import React from 'react';
import './cart-dropdown.style.scss';
import CostomButton from '../custom-button/CustomButton.component.jsx';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className='cart-item'/>
		<CostomButton>
			GO TO CHECKOUT
		</CostomButton>
	</div>
	)

export default CartDropdown;