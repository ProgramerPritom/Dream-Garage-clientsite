import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sharer/Loading';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const ManageProducts = () => {

    const { isLoading, error, data: manageProducts } = useQuery('manageProduct',()=>fetch('http://localhost:5000/products').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    let errorMsg;
    if (error) {
        errorMsg = error.message;
    }

    const handleEdit = () =>{
        console.log('edit clicked')
    }

    const handleDelete = () =>{
        console.log('delete clicked')
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
                    <th>Manage</th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                {
                  manageProducts.map((manageProduct,index) => <>
                  <tr>
                    <th>
                    {index + 1}
                    </th>
                    <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={manageProduct.image} />
                        </div>
                        </div>
                        <div>
                        <div class="font-bold">{manageProduct.name}</div>
                        
                        </div>
                    </div>
                    </td>
                    <td>
                    {manageProduct.quantity} pics
                    
                    </td>
                    <td>${manageProduct.price}</td>
                    <th>
                    <div className='flex justify-around'>
                        <div className='btn btn-ghost' onClick={handleEdit}><BsPencilSquare></BsPencilSquare></div>
                        <div className='btn btn-ghost' onClick={handleDelete}><FaTrashAlt></FaTrashAlt></div>
                    </div>
                    </th>
                </tr>
                  </>)  
                }
                
                {errorMsg}
                
                
                
                </tbody>
                
                
            </table>
            </div>
    );
};

export default ManageProducts;