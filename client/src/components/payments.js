import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// import {Elements, CardElement} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

import {connect} from 'react-redux';
import * as actions from '../actions';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
class Payment extends React.Component {
    render() {
        return (
            
            <StripeCheckout
                name='Quora'
                description='$5 for 5 email credits'
                amount={500}
                token={(token) => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}

            >
                <button className='btn'>Add credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions)(Payment);