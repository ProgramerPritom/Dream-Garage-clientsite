import React from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrdersRow = ({manageOrder,index,refetch}) => {
    const {_id} = manageOrder;

    const handlePending = () =>{
        const shipped = {
            shipped: true
        }
        fetch(`http://localhost:5000/bookingOrders/${_id}`,{
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify(shipped),
            })
            .then(res => res.json())
            .then(data =>{
                refetch();
                // console.log(data);
            })
    }



    return (
        <tr>
                            <th>{index + 1}</th>
                            <td>{manageOrder.name}</td>
                            <td>{manageOrder.value}</td>
                            <td>{manageOrder.price}</td>
                            <td>
                                {
                                    (manageOrder.paid && !manageOrder.shipped) && <Link to={''}> <button  class="btn btn-ghost btn-xs" onClick={handlePending}>Pending</button></Link>
                                }
                                {
                                    (manageOrder.paid && manageOrder.shipped) && <Link to={''}> <button  class="btn btn-ghost btn-xs" onClick=''>Shipped</button></Link>
                                }
                                {(manageOrder.price && !manageOrder.paid) && <Link to=''> <button  class="btn btn-ghost btn-xs">UnPaid</button></Link>}
                            </td>
                        </tr>
    );
};

export default ManageAllOrdersRow;