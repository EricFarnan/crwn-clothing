import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HePPRJCNaQ35Q3lvvHnDzJag7JYGep6wiuwntQyx08Z1afCjXyCVxqrtyLW2e3DF42pl1jpQGyLf3hGtPXgxlgi00xMhQgCME';
      
    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress 
            image='https://svgshare.com/i/CUz.sg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;