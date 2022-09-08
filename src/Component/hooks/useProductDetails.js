import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useProductDetails = (id) => {
    const [productDetails,setProductDetails] = useState({})
    
    useEffect(()=>{
        fetch(`https://whispering-meadow-28819.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetails(data));
    },[id])


    return [productDetails,setProductDetails]
};

export default useProductDetails;