import React from "react";
import shopData from "./SHOP_DATA"
import CollectionPreview from "../../component/collection-preview/Collection-preview.component"

export default class Shop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			collection:shopData
		}
	}

	render(){
		const {collection} = this.state;
		return(
			<div>
				{collection.map(({id,...collectionProps}) => {
					return (<CollectionPreview key={id} {...collectionProps}/>)
				})
				}
			</div>
		)
	}
}