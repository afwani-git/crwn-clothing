import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
	[selectShop],
	selectShop => selectShop.collection
)

export const selectCollectionPreview = createSelector(
	[selectShopCollection],
	collection => Object.keys(collection).map(key => collection[key])
)

export const selectCollectionCategory = paramsId => createSelector(
	[selectShopCollection],
	collection => collection[paramsId]//hash table
)