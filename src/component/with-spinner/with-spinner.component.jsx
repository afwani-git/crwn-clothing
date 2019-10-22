// this HOC
//===========================
import React from 'react';
// style
import { SpinnerOverlay,SpinnerContainer } from './with-spinner.style.jsx';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => { 
	return  isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer/>
			</SpinnerOverlay>
		):
		(
			<WrappedComponent {...otherProps}/>
		)

}

export default WithSpinner;