import cartTypes from './cart.types.jsx';
const INITIAL_STATE = {
	hidden:true
}

const CartReducer = (state = INITIAL_STATE,action) =>{
	switch(action.type){
		case cartTypes.TOGGLE_CART_HIDDEN:
			return{
				...state,
				hidden:!state.hidden
			}
		default:
			return{
				...state
			}
	}
}

export default CartReducer;