import { call,all } from 'redux-saga/effects';
import { fetchCollectionAsyncStart } from './shop/shop.sagas';
import { userSaga }  from './user/user.sagas.jsx';
import { cartSagas } from './cart/cart.sagas.jsx'

export  function* rootSagas(){
	yield all([
		call(fetchCollectionAsyncStart),
		call(userSaga),
		call(cartSagas)
	])
}