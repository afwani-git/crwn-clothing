import shopActionTypes from './shop.types.jsx';
import { firestore,convertCollectionsToMap } from '../../firebase.util.js';

export const fetchCollectionStart = () => ({
	type:shopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionMap => ({
	type:shopActionTypes.FETCH_COLLECTION_SUCCESS,
	payload:collectionMap
})

export const fetchCollectionError = errorMsg => ({
	type:shopActionTypes.FETCH_COLLECTION_FAILURE,
	payload:errorMsg
})

export const fetchCollectionStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collection');
		dispatch(fetchCollectionStart());

		collectionRef.get().then(snapshot => {
			const collectionMap =  convertCollectionsToMap(snapshot);
			dispatch(fetchCollectionSuccess(collectionMap));
		}).catch(error => dispatch(fetchCollectionError(error.message)))
	};
};