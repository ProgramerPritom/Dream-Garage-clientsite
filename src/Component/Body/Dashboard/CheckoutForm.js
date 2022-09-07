import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({bookingPayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transtionId, setTranstionId] = useState('')
    const [clientSecret,setClientSecret] = useState('');

    const {price , email,name,value,_id} = bookingPayment;

    useEffect( ()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },

            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                 setClientSecret(data.clientSecret);
            }
        })
    },[price])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type : 'card',
            card
        });

       
            setCardError(error?.message || '');
            setProcessing(true);

            // payment confirm
            const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
                clientSecret,
                {
                payment_method : {
                    card: card,
                    billing_details:{
                        name: name,
                        email: email
                        
                    }
                }
            });
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }   
        else{
            setCardError('');
            console.log(paymentIntent);
            setTranstionId(paymentIntent.id);
            setCardSuccess('Congrats! your payment is completed.')

            // payment fetch
            const payment = {
                productId : _id,
                price : price,
                transactionId : paymentIntent.id,
                email: email,
                name: name

            }
            fetch(`http://localhost:5000/bookingOrders/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json',
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data =>{
                setProcessing(false);
                // console.log(data)
            })


        } 
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
        <CardElement
            options={{
            style: {
                base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
                },
                invalid: {
                color: '#9e2146',
                },
            },
            }}
        />
        <div className='w-full mt-8'>
        <button type="submit" class="w-full btn btn-primary" disabled={!stripe}>
            Pay
        </button>
        </div>
            </form>
            {
                cardError && <p className='text-red-500 text-center font-semibold'>{cardError}</p>
            }
            {
                cardSuccess && <div>
                    <p className='text-green-500 text-center font-semibold'>{cardSuccess}</p>
                    <p>Your Transaction Id : <span className="text-orange-500 font-semibold">{transtionId}</span></p>
                </div>
            }
            
            
        </>
    
    );
};

export default CheckoutForm;