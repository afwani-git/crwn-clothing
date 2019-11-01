import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectShopCollectionFetching } from '../../redux/shop/shop.selector.jsx';

import WithSpinner from '../with-spinner/with-spinner.component.jsx';//hoc
import CollectionOverview from './collection-overview.component.jsx';

const mapsStateToProps = createStructuredSelector({
	isLoading:selectShopCollectionFetching
})

const CollectionOverviewContainer = compose(
	connect(mapsStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;