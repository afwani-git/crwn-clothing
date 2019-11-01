import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({price}) => {
	const priceForStripe = price * 100;//this is cen
	const publishKey =  'pk_test_WFgYlRB7FWo5St6T5SSwenXK00aExTcQJB';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful')
	}
	
	return (
		<StripeCheckout 
			label="Pay Now"
			name='CRWN Clothing Ltd.'
			image='http://svgshare.com/i/CUz.svg'
			billingAddress
			shippingAddress
			description={`your money ${price}`}
			amount={priceForStripe}
			panelLabel='pay Now'
			token={onToken}
			stripeKey={publishKey}
		/>
	)
}

export default StripeCheckoutBtn;