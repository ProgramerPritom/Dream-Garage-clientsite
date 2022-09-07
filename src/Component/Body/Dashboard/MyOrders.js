import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Sharer/Loading';

import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const {data: orders, isLoading, refetch} = useQuery('users', ()=>fetch(`http://localhost:5000/bookingOrders?userMail=${user.email}`,{
        method: 'GET',
        headers: {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    // console.log(orders)
    if (isLoading || loading) {
        return <Loading></Loading>
    }

   

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th>
                    SL No
                    </th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Mute</th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                {
                    orders.map((order,index) => <MyOrderRow key={order._id}order={order} index={index} refetch={refetch}></MyOrderRow>)
                }
                
                
                
                
                
                </tbody>
                
                
            </table>
            </div>
    );
};

export default MyOrders;