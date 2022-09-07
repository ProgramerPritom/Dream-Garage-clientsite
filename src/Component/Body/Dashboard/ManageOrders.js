import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Sharer/Loading';
import ManageAllOrdersRow from './ManageAllOrdersRow';

const ManageOrders = () => {

    const {data: manageOrders, isLoading,refetch} = useQuery("manageAllOders", ()=> fetch('http://localhost:5000/orders',{
        method: 'GET',
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    
    if (isLoading) {
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
                {
                    manageOrders.map((manageOrder, index) => <ManageAllOrdersRow key={manageOrder._id} manageOrder={manageOrder} index={index} refetch={refetch}></ManageAllOrdersRow>)
                }
                
                
                
                
                
                </tbody>
                
                
            </table>
            </div>
    );
};

export default ManageOrders;