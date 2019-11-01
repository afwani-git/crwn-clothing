import React from "react";
// import "./CustomButton.style.scss";
import { CustomButtonContainer } from './CustomButton.style.jsx';

const CostomButton = ({children,...otherProps}) => (
		<CustomButtonContainer {...otherProps}>
			{children}
		</CustomButtonContainer>
	)

export default CostomButton;