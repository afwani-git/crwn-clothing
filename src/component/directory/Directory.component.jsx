import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/MenuItem.component";
// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directorySectionSelector } from '../../redux/directory/directory.selectors';

const Directory  = ({sections}) => (
	<div className="directory-menu">
		{sections.map(({id,...otherProps}) => 
			<MenuItem key={id} {...otherProps}/>
		)}
	</div>
);

const mapsStateToProps = createStructuredSelector({
	sections:directorySectionSelector
})
export default connect(mapsStateToProps)(Directory);