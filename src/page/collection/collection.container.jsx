// redux
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector.jsx';
import { compose } from 'redux';
import { connect } from 'react-redux';
// component
import CollectionPage from './collection.component.jsx';
import WithSpinner from '../../component/with-spinner/with-spinner.component.jsx';

const mapsStateToProps = createStructuredSelector({
	isLoading:state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapsStateToProps),
	WithSpinner
)(CollectionPage);// ==> const export default connect(mapsStateToProps)(WithSpinner(CollectionPage))

export default CollectionPageContainer;