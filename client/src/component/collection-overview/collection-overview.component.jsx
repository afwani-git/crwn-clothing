import React from 'react';
import './collection-overview.style.scss';
import CollectionPreview from "../../component/collection-preview/Collection-preview.component"
// redux
import { connect } from 'react-redux';
import { selectCollectionPreview} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({collection}) => {
	return(
	<div className='collection-overview'>
		{collection.map(({id,...collectionProps}) => {
			return (<CollectionPreview key={id} {...collectionProps}/>)
			})
		}
	</div>
)}

const mapsStateToProps = createStructuredSelector({
	collection:selectCollectionPreview
})

export default connect(mapsStateToProps)(CollectionOverview);