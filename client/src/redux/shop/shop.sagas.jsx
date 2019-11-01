import {  takeEvery,call,put } from 'redux-saga/effects';
import shopActionTypes from './shop.types.jsx';
import { firestore,convertCollectionsToMap } from '../../firebase.util.js';
import {
	fetchCollectionSuccess,
	fetchCollectionError,
} from './shop.action.jsx'

export function* fetchCollectionAsync(){
	try{
		const collectionRef = yield firestore.collection('collection');
		const snapshot = yield collectionRef.get();
		const collectionMap = yield call(convertCollectionsToMap,snapshot);
		yield put(fetchCollectionSuccess(collectionMap));
	}catch(err){
		yield put(fetchCollectionError(err.message));
	}
}

export function* fetchCollectionAsyncStart(){
	yield takeEvery(shopActionTypes.FETCH_COLLECTION_START,
					fetchCollectionAsync);
}