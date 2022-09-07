import React, { useEffect, useState } from 'react';
import './DetailProduct.css';
import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import { useQuery } from 'react-query';
import Loading from '../../../Sharer/Loading';
import { FaArrowRight } from 'react-icons/fa';
import { HiPlus, HiMinus } from "react-icons/hi";
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const DetailProduct = () => {
    
    const [value,setValue] = useState(0); 
    const [updatePrice, setUpdatePrice] = useState(0);
    const {id} = useParams();
    const [data,setData] = useState([]);
    
    const url = `http://localhost:5000/products/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
        }
            )
    },[]);
    const navigate = useNavigate();
    const {productName,price,quantity,minimumQuantity} = data;
    // console.log(productName);
    // const {minimumQuantity} = data;
    // const [value,setValue] = useState(0);
    // let newValue;
    // useEffect(()=>{
    //    let newValue = value;
    //     setValue(newValue);
    // },[value]);
    useEffect(()=>{
        let quantity = minimumQuantity;
        setValue(quantity);
    },[minimumQuantity])
    useEffect(()=>{
        let newPrice = price * minimumQuantity;
        setUpdatePrice(newPrice);
    },[price])

    const handlePlus = () =>{
        if (value >= minimumQuantity && value < quantity) {
            setValue(value + 1);
            setUpdatePrice(parseInt(updatePrice) + parseInt(price));
        }
        
        
    }
    const handleMinus = () =>{
        if (value > minimumQuantity && value <= quantity) {
            setValue(value - 1);
            setUpdatePrice(parseInt(updatePrice) - parseInt(price));
        }
       
    }
    const handlePlaceOrder = () =>{
        // navigate('/placeOrder');
        // console.log(data,updatePrice,value)
        
    }


    return (
        <div>
            <div className="products-info-text">
                <div className="login-banner flex justify-center pt-4">
                <div className='flex text-center items-baseline pt-48'>
                <h5 className="text-3xl text-white font-semibold mr-4">Dream Motors</h5>
                <div className="login-icon text-white mr-4 text-xl">
                <FaArrowRight></FaArrowRight>
                </div>
                <h6 className="text-2xl text-white font-semibold mr-4">PRODUCT</h6>
                <div className="login-icon text-white mr-4 text-xl">
                <FaArrowRight></FaArrowRight>
                </div>
                <h6 className="text-2xl text-white font-semibold mr-4 uppercase">{data.productName}</h6>
                </div>
                </div>
            </div>


            <div className="display-details mx-4 my-8">
            {
                <PlaceOrder value={value} updatePrice={updatePrice} data={data}></PlaceOrder>
            }

            <div class="card lg:card-side">
            <img className='w-4/12 border-4 rounded-lg' src={data.image} alt="Album"/>
            <div class="px-8">
                <h2 class="text-2xl font-bold my-1">{data.productName}</h2>
                <p className="text-xl font-bold my-1">
                    Price : <span className='text-xl font-semibold text-slate-700'> ${data.price}</span>
                </p>
                <p className='mt-4'>{data.description}</p>

                <div className='my-4 flex'>
                <div class="grid grid-cols-3 divide-x-2 w-1/2 border p-2">
                    <div className='text-center font-semibold'>In Stock</div>
                    <div className='text-center font-bold'>{data.quantity} pics</div>
                    
                    </div>
                <div class="grid grid-cols-3 divide-x-2 w-1/2 border ml-4 p-2">
                    <div className='text-center font-semibold'>Product Price</div>
                    <div className='text-center font-bold'>${price}</div>
                    
                    </div>
                </div>

                <div className='flex my-5'>
                    <div class="grid grid-cols-3 divide-x-2 w-1/2 border-2 p-2">
                    <div onClick={handleMinus} className='cursor-pointer text-center font-semibold flex items-center justify-center'><HiMinus></HiMinus></div>
                    <div className='text-center font-bold'><input className='w-1/2' type="text" name="quantity" value={value} id="" /></div>
                    <div onClick={handlePlus} className=' cursor-pointer text-center  flex items-center justify-center'><HiPlus></HiPlus></div>
                    
                    </div>
                    <div class="grid grid-cols-3 divide-x-2 w-1/2 ml-4 border p-2">
                    <div className='text-center font-semibold'>Your Price</div>
                    <div className='text-center font-bold'>${updatePrice}</div>
                    
                    </div>
                </div>


                <div class="card-actions justify-end">
                <label for="my-modal" id='basicBtn' onClick={handlePlaceOrder} class="btn btn-primary">Process to Order</label>
                </div>
            </div>
            </div>
            </div>

            <div className="product-review">
                <h3 className="text-2xl text-center text-yellow-500 font-bold my-4">
                    Reviews
                </h3>
            </div>
           


        </div>
    );
};

export default DetailProduct;