import { call,all,takeLatest,put }  from 'redux-saga/effects';
import userActionType from '../user/user.types';
import { clearAllItem } from './cart.action.jsx';

export function* clearAll(){
	yield put(clearAllItem());
}

export function* clearAllItemFromCart(){
	yield takeLatest(userActionType.SIGN_OUT_SUCCESS,clearAll);
}

export function* cartSagas(){
	yield all([
		call(clearAllItemFromCart)
	])
};