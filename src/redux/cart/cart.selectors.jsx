import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const  selectCartItems = createSelector(
		[selectCart],
		cart => cart.cartItems
	)

export const selectCartItemsCount = createSelector(
		[selectCartItems],
		cartItems => cartItems.map(item => item.quantity).reduce((next,prev) => next + prev,0)
	)