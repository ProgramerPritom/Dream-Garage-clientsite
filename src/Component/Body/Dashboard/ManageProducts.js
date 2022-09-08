import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Sharer/Loading';

import DeleteProducts from './DeleteProducts';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { isLoading, error, data: manageProducts, refetch } = useQuery('manageProduct',()=>fetch('http://localhost:5000/products').then(res => res.json()))
    const navigate = useNavigate();
    if (isLoading) {
        return <Loading></Loading>
    }
    let errorMsg;
    if (error) {
        errorMsg = error.message;
    }

    const handleEdit = (id) =>{
        navigate(`/dashboard/manageProduct/${id}`);
        // console.log('edit clicked')
        // console.log(id)
    }

    
    return (

        <div>
            <div>
                <h3 className="text-center font-semibold text-3xl my-4 text-yellow-700">Manage All Products</h3>
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
                    <th>Manage</th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                {
                  manageProducts.map((manageProduct,index) => <ProductRow manageProduct={manageProduct} index={index} setDeleteProduct={setDeleteProduct} handleEdit={handleEdit}></ProductRow>)  
                }




                {deleteProduct&& <DeleteProducts deleteProduct={deleteProduct} isLoading={isLoading} refetch={refetch} setDeleteProduct={setDeleteProduct}></DeleteProducts>}

                {errorMsg}
                
                
                
                </tbody>
                
                
            </table>
            </div>
        </div>
    );
};

export default ManageProducts;