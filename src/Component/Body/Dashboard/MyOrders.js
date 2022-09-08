import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Sharer/Loading';

import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const {data: orders, isLoading, refetch} = useQuery('users', ()=>fetch(`https://whispering-meadow-28819.herokuapp.com/bookingOrders?userMail=${user.email}`,{
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
        <div>
            <div>
                <h3 className="text-center font-semibold text-3xl text-yellow-700 my-4">My Orders</h3>
            </div>

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
        </div>
    );
};

export default MyOrders;