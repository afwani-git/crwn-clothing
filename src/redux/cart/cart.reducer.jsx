import cartTypes from './cart.types.jsx';
import { addItemToCart  } from './cart.util.jsx';
import { removeItemFromCart } from './cart.util.jsx';
const INITIAL_STATE = {
	hidden:true,
	cartItems:[]
}

const CartReducer = (state = INITIAL_STATE,action) =>{
	switch(action.type){
		case cartTypes.TOGGLE_CART_HIDDEN:
			return{
				...state,
				hidden:!state.hidden
			};
		case cartTypes.ADD_ITEM_TO_CART:
			return{
				...state,
				cartItems:addItemToCart(state.cartItems,action.payload)
			};
		case cartTypes.CLEAR_ITEM_TO_CART:
			return{
				...state,
				cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			};
		case cartTypes.REMOVE_CART_ITEM:
			return{
				...state,
				cartItems: removeItemFromCart(state.cartItems,action.payload)
			}
		default:
			return{
				...state
			};
	}
}

export default CartReducer;