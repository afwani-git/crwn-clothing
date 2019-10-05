import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/CollectionItem.component";


const CollectionPreview = ({title,items}) => (
	<div className="collection-preview">
		<h1 className="title">{title}</h1>
		<div className="preview">
			{
				items
				.filter((item,idx) => idx < 4)
				.map(({id,...allPropsItem}) => (
					<CollectionItem key={id} {...allPropsItem}/>
				))
			}
		</div>	
	</div>
)

export default CollectionPreview;