import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,image,productName,price,description,minimumQuantity,quantity} = product;
    const navigate = useNavigate();

    const seeDescription = description.slice(0,120);
    const seeMore = seeDescription + '......see more';
    const handleAddCart = (id) =>{
        navigate(`/detailProduct/${id}`);
    }


    return (
        <div>
            
                        <div class="card w-full border h-auto">
                    
                        <img className='w-3/4' src={image} alt="Shoes" class="" />
                    
                    <div class="card-body p-2">
                        <h2 class="card-title">{productName}</h2>
                        <div className='flex justify-evenly'>
                            <p>Price: <span className='font-bold'> ${price}</span></p>
                            <p>Available Stock: <span className='font-semibold'>{quantity}</span></p>
                        </div>
                        <hr />
                        <p className="text-center font-semibold pb-3">Minimum Orders: <span className='font-bold underline text-xl'>{minimumQuantity} Pics</span></p>
                        <p>{description === 140 ? seeDescription : seeMore}</p>
                        <div class="card-actions">
                        <button id='basicBtn' class="btn btn-primary w-full" onClick={()=>handleAddCart(_id)}>Add Cart</button>
                        </div>
                    </div>
                    </div>
                    
        </div>
    );
};

export default Product;