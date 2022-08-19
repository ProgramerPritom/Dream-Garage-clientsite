import React from 'react';
import './DetailProduct.css';
import { Routes, Route, useParams } from "react-router-dom"
import { useQuery } from 'react-query';
import Loading from '../../../Sharer/Loading';
import { FaArrowRight } from 'react-icons/fa';

const DetailProduct = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/products/${id}`;
    const {data, isLoading} = useQuery('productInfo', ()=> fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
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
        </div>
    );
};

export default DetailProduct;