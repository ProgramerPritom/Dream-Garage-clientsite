import React from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const ProductRow = ({manageProduct,index,setDeleteProduct ,handleEdit}) => {
    return (
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
                        <div onClick={()=>handleEdit(manageProduct._id)} className='btn btn-ghost' ><BsPencilSquare></BsPencilSquare></div>
                        
                        <label for="delete-modal" onClick={()=>setDeleteProduct(manageProduct)} class="btn btn-ghost" ><FaTrashAlt></FaTrashAlt></label>
                    </div>
                    </th>
                </tr>
    );
};

export default ProductRow;