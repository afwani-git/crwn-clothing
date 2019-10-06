import React from "react";
import "./CustomButton.style.scss";

const CostomButton = ({children,isGoogleSignIn,...otherProps}) => (
		<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
			{children}
		</button>
	)

export default CostomButton;