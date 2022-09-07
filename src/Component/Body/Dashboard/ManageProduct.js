import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetails from '../../hooks/useProductDetails';

const ManageProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [productDetails,setProductDetails] = useProductDetails(id)
    
    // console.log(productDetails);


    const handleChangePrice = event =>{

        const {price, ...rest} = productDetails;
        const newPrice = event.target.value;
        const newProductDetail = {price: newPrice, ...rest};
        setProductDetails(newProductDetail);
    }
    const handleChangeQuantity = event =>{

        const {quantity, ...rest} = productDetails;
        const newQuantity = event.target.value;
        const newProductDetail = {quantity: newQuantity, ...rest};
        setProductDetails(newProductDetail);
    }
    const handleChangeminimumQuantity = event =>{

        const {minimumQuantity, ...rest} = productDetails;
        const newMinimumQuantity = event.target.value;
        const newProductDetail = {minimumQuantity: newMinimumQuantity, ...rest};
        setProductDetails(newProductDetail);
    }

    const handleDescription = (event) =>{
        const {description, ...rest} = productDetails;
        const newDescription = event.target.value;
        const newProductDetail = {minimumQuantity: newDescription, ...rest};
        setProductDetails(newProductDetail);
    }

    const handleSubmitUpdate = () =>{
        const updateProduct = {
            price : productDetails.price,
            quantity : productDetails.quantity,
            minimumQuantity : productDetails.minimumQuantity,
            description : productDetails.description
        }
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'PUT',
            body : JSON.stringify(updateProduct),
            headers: {
                'Content-type': 'application/json',
              },
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success('Updated your product data');
            navigate('/dashboard/manageproduct');
        })
    }



    return (
        <div>
            <div>
                <h3 className="text-2xl font-semibold text-center ">Product Name : <span className='text-yellow-600 font-bold underline'>{productDetails.productName}</span></h3>
            </div>
            <div></div>

            <div className='flex justify-between'>
                <div class="form-control w-1/2 m-2">
                    <label class="label">
                        <span class="text-xl font-bold">Price</span>
                    </label>
                    <input type="text" value={productDetails.price} placeholder="Price" onChange={handleChangePrice} class="input input-bordered" />
                </div>


                <div class="form-control w-1/2 m-2">
                    <label class="label">
                        <span class="text-xl font-bold">Quantity</span>
                    </label>
                    <input type="text" value={productDetails.quantity} placeholder="Price" onChange={handleChangeQuantity} class="input input-bordered" />
                </div>


                <div class="form-control w-1/2 m-2">
                    <label class="label">
                        <span class="text-xl font-bold">MinimumQuantity</span>
                    </label>
                    <input type="text" value={productDetails.minimumQuantity} placeholder="Price" onChange={handleChangeminimumQuantity} class="input input-bordered" />
                </div>
                


                
            </div>


            <div className='p-4'>
                <div className="form-control">
                <label class="label">
                        <span class="text-xl font-bold">Quantity</span>
                </label>
                <textarea class="textarea textarea-bordered" placeholder="Description Here" value={productDetails.description} onChange={handleDescription}></textarea>
                </div>
            
            </div>
            <div>
                <button className='btn btn-primary' onClick={handleSubmitUpdate}>Submit</button>
            </div>
        </div>
    );
};

export default ManageProduct;