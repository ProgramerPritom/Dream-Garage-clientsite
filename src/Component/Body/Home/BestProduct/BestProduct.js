import React from 'react';
import {useNavigate} from 'react-router-dom';

const BestProduct = ({product}) => {
    const {_id,productName,image,description,price,quantity} = product;
    const seeDescription = description.slice(0,120);
    const seeMore = seeDescription + '......see more';
    const navigate = useNavigate();
    const handleAddCart = (id) =>{
        navigate(`/detailProduct/${id}`);
    }
    return (
        <div>
            <div class="card w-full border">
            <figure><img className='w-40' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">{productName}</h2>
                <div className="flex">
                <p>Price: $<span className='font-bold'>{price}</span></p>
                <p className='font-semibold'>Available Stock: <span className='font-bold underline'>{quantity}</span></p>
                </div>
                <p>{description === 150 ? seeDescription : seeMore}</p>
                <div class="card-actions">
                <button onClick={()=>handleAddCart(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BestProduct;