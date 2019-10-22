import shopActionTypes from './shop.types.jsx';

export const updateCollection = collectionMap => ({
	type:shopActionTypes.ADD_SHOP_COLLECTION,
	payload:collectionMap
})

