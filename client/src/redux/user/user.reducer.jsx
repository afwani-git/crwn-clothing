import userActionType from './user.types.jsx';


const INITIAL_STATE = {
	currentUser:null,
	error:null
}

const userReducer = (state = INITIAL_STATE ,action) => {
		switch (action.type) {
			case userActionType.SIGN_IN_SUCCESS:
				return{
					...state,
					currentUser:action.payload,
					error:null
				}
			case userActionType.SIGN_OUT_SUCCESS:
				return{
					...state,
					currentUser:null,
					error:null
				}
			case userActionType.SIGN_IN_ERROR:
			case userActionType.SIGN_OUT_FILURE:
			case userActionType.SIGN_UP_FILURE:
				return{
					...state,
					error:action.payload
				}
			default:
				return state;
		}
}

export default userReducer;