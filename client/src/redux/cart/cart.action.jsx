import CartTypes from './cart.types.jsx';

export const toggleCartHidden = () => ({
	type:CartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	type:CartTypes.ADD_ITEM_TO_CART,
	payload:item
});

export const removeItem = item => ({
	type:CartTypes.REMOVE_CART_ITEM,
	payload:item
})

export const clearItem = item => ({
	type:CartTypes.CLEAR_ITEM_TO_CART,
	payload:item
})

export const clearAllItem = () => ({
	type:CartTypes.CLEAR_CART
})