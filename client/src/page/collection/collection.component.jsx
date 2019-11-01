import React from 'react';
import './collection.style.scss';
// redux
import { connect } from 'react-redux';
import { selectCollectionCategory } from '../../redux/shop/shop.selector.jsx';
import CollectionItem from '../../component/collection-item/CollectionItem.component';

const CollectionPage = ({collection}) => {
	const { title,items } = collection;
	return(
	<div className="collection-page">
		<h2 className="title">{title}</h2>
		<div className='items'>
			{
				items.map(item => (
					<CollectionItem key={item.id} item={item}/>
				))
			}
		</div>
	</div>
)}

const mapsStateToProps = (state,ownProps) => ({
	collection:selectCollectionCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapsStateToProps)(CollectionPage);
