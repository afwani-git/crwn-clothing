import shopActionTypes from './shop.types.jsx';

const INITIAL_STATE = {
	collection:null,
	isFetching:false,
	errorMsg:undefined
}

const shopReducer = (state = INITIAL_STATE,action) => {
	switch (action.type) {
		case shopActionTypes.FETCH_COLLECTION_START:
			return{
				...state,
				isFetching:true
			};
		case shopActionTypes.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				collection:action.payload,
				isFetching:false
			};
		case shopActionTypes.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching:false,
				errorMsg:action.payload
			}
		default:
			return state
	}
}

export default shopReducer;