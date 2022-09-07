import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const MyOrderRow = ({order,index,refetch}) => {
    const handleRemove = (id) =>{
        fetch(`http://localhost:5000/bookingOrders/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
        })
        refetch();
    }
    return (
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
                    <td>
                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button  class="btn btn-ghost btn-xs">Pay</button></Link>}

                        {(order.price && order.paid && !order.shipped) && <Link to={''}> <button  class="btn btn-ghost btn-xs">Pending</button></Link>}

                        {(order.paid && order.shipped) && <Link to={''}> <button  class="btn btn-ghost btn-xs">Shipping</button></Link>}


                        </td>
                        <td>
                            {(!order.paid) && <Link onClick={()=>handleRemove(order._id)} to=''><FaTrashAlt></FaTrashAlt></Link>}
                        </td>
                    
                </tr>
    );
};

export default MyOrderRow;