import shopActionTypes from './shop.types.jsx';

const INITIAL_STATE = {
	collection:null
}

const shopReducer = (state = INITIAL_STATE,action) => {
	switch (action.type) {
		case shopActionTypes.ADD_SHOP_COLLECTION:
			return {
				...state,
				collection:action.payload
			}
		default:
			return state
	}
}

export default shopReducer;