import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg';
import './cart-icon.style.scss';
import { connect } from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.action.jsx';

const CartIcon = ({toggleCartHidden}) => (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon  className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	)

const mapsDispatchToProps = dispatch => ({
	toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(null,mapsDispatchToProps)(CartIcon);