import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Sharer/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51LUQflG4C5NNRweSgrZWbcJDjquwEcaVWC6CNFQBXkIy6Dyz8WzSi0SL0g9fUh5ZnJpa2pOztHhhuaTkUGdMD1eC00d9XKwN1v');

const Payment = () => {
    const {id} = useParams();
    const url =  `http://localhost:5000/bookingOrders/${id}`;
    const  {data: bookingPayment,isLoading} = useQuery(['bookingOrderPayment',id], ()=> fetch(url,{
        method: 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col">
                
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-center my-4 font-semibold">Payment for <span className='text-xl font-bold text-red-800 underline'>"{bookingPayment.name}"</span></h2>
                        <div className='flex items-center justify-between'>
                            <h3 className="text-xl font-bold">Your Product: </h3>
                            <div class="avatar">
                                <div class="w-20 rounded-full">
                                    <img className='' src={bookingPayment.img} />
                                </div>
                                </div>
                        </div>
                        <p className='text-xl font-semibold'>Product total Price = $ <span className='text-yellow-800 font-bold text-2xl'>{bookingPayment.price}</span></p>
                         <p className='text-xl font-semibold'>Order Quantity = <span className='text-yellow-800 font-bold text-2xl'>{bookingPayment.value}</span> pics</p>
                    </div>
                    </div>


                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                    <CheckoutForm bookingPayment={bookingPayment} />
                    </Elements>



                    
                </div>
                </div>
            </div>
            </div>
    );
};

export default Payment;