import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Sharer/Loading';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const {data: orders, isLoading, refetch} = useQuery('users', ()=>fetch(`http://localhost:5000/orders?userMail=${user.email}`,{
        method: 'GET',
        headers: {
            
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
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                {
                    orders.map((order,index) => <>
                    <tr>
                    <th>
                    {index + 1}
                    </th>
                    <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={order.img} />
                        </div>
                        </div>
                        <div>
                        <div class="font-bold">{order.name}</div>
                        
                        </div>
                    </div>
                    </td>
                    <td>
                    {order.value} pics
                    
                    </td>
                    <td>${order.price}</td>
                    <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
                </>)
                }
                
                
                
                
                
                </tbody>
                
                
            </table>
            </div>
    );
};

export default MyOrders;