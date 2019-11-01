import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg';
import './cart-icon.style.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action.jsx';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.jsx';

const CartIcon = ({toggleCartHidden,itemCount}) => {
	return(
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon  className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	)}

const mapsDispatchToProps = dispatch => ({
	toggleCartHidden:() => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
	itemCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapsDispatchToProps)(CartIcon);