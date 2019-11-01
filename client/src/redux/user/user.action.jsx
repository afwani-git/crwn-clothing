import userActionType  from './user.types';

//google
export const signWithGoogleStart = () => ({
	type:userActionType.GOOGLE_SIGN_IN_START
})
//email
export const signWithEmailStart = (emailAndPassword) => ({
	type:userActionType.EMAIL_SIGN_IN_START,
	payload:emailAndPassword
})

export const signSuccess = user => ({
	type:userActionType.SIGN_IN_SUCCESS,
	payload:user
})

export const signFailure = error => ({
	type:userActionType.SIGN_IN_ERROR,
	payload:error
})

export const checkUserSession = () => ({
	type:userActionType.USER_SESSION_CHECK
})

export const signOutStart = () => ({
	type:userActionType.SIGN_OUT_START
})

export const signOutSuccess = () => ({
	type:userActionType.SIGN_OUT_SUCCESS
})

export const signOutFailure = () => ({
	type:userActionType.SIGN_OUT_SUCCESS
})

export const signUpStart = userAndPass => ({
	type:userActionType.SIGN_UP_START,
	payload:userAndPass
});

export const signUpSuccess = ({user,data}) => ({
	type:userActionType.SIGN_UP_SUCCESS,
	payload:({user,data})
});

export const signUpFailure = (err) => ({
	type:userActionType.SIGN_UP_FILURE,
	payload:err
});