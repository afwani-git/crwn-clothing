import { call,all,put,takeLatest } from 'redux-saga/effects';

import { 
	auth,
	createUserProfileDocument,
	googleProvider
} from '../../firebase.util.js';

import {
	signSuccess,
	signFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from './user.action.jsx';

import userActionType from './user.types.jsx';
import { getCurrentUser } from '../../firebase.util.js';


export function* getSnapshotFromUserAuth(user,data){
	try{
		const userRef = yield call(createUserProfileDocument,user);
		const userSnapShot = yield userRef.get();
		yield put(
			signSuccess({id:userSnapShot.id,...userSnapShot.data()})
		);
	}catch(err){
		yield put(
			signFailure(err)
		);
	}
}

export function* isAuthUser(){
	try{
		const userAuth = yield getCurrentUser();
		if(!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	}catch(err){
		yield signFailure(err);
	}
}

export function* signInWithGoogle(){
	try{
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	}catch(err){
		yield put(
			signFailure(err)
		);
	}
}

export function* signInWithEmail({payload:{email,password}}){
	try{
		const { user } = yield auth.signInWithEmailAndPassword(email,password);
		yield put(signUpSuccess({user}))
	}catch(err){
		yield put(signOutFailure(err));
	}
}

export function* signInAfterSignUp({payload:{user,data}}){
	yield getSnapshotFromUserAuth(user,data);
	yield isAuthUser();
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}


export function* signUp({payload:{displayName, email, password}}){
	try{
		const { user } = yield auth.createUserWithEmailAndPassword(
        email,
        password);
		yield put(signUpSuccess({user,data:{displayName}}))
	}catch(err){
		yield put(signUpFailure(err))
	}
}

export function* onSignUpSuccess(){
	yield takeLatest(userActionType.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* onGoogleSignInStart(){
	yield takeLatest(userActionType.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onEmailSignInStart(){
	yield takeLatest(userActionType.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onSignOutStart(){
	yield takeLatest(userActionType.SIGN_OUT_START, signOut);
}

export function* onCheckSessionStart(){
	yield takeLatest(userActionType.USER_SESSION_CHECK,isAuthUser);
}

export function* onSignUpStart(){
	yield takeLatest(userActionType.SIGN_UP_START,signUp)
}

export function* userSaga(){
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckSessionStart),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess)
	])
}