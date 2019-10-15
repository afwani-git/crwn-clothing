import CartTypes from './cart.types.jsx';
import { addItemToCart,removeItemFromCart  } from './cart.util';

const INITIAL_STATE = {
	hidden:true,
	cartItems:[]
}

const CartReducer = (state = INITIAL_STATE,action) =>{
	switch(action.type){
		case CartTypes.TOGGLE_CART_HIDDEN:
			return{
				...state,
				hidden:!state.hidden
			};
		case CartTypes.ADD_ITEM_TO_CART:
			return{
				...state,
				cartItems:addItemToCart(state.cartItems,action.payload)
			};
		case CartTypes.CLEAR_ITEM_TO_CART:
			return{
				...state,
				cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			};
		case CartTypes.REMOVE_CART_ITEM:
			return{
				...state,
				cartItems: removeItemFromCart(state.cartItems,action.payload)
			};
		default:
			return state;
	}
}

export default CartReducer;