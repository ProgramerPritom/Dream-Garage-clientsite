import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useProductDetails = (id) => {
    const [productDetails,setProductDetails] = useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data));
    },[id])


    return [productDetails,setProductDetails]
};

export default useProductDetails;