import cartTypes from './cart.types.jsx';

export const toggleCartHidden = () => ({
	type:cartTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
	type:cartTypes.ADD_ITEM_TO_CART,
	payload:item
})