import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Products = () =>{
    const [products, setProducts] = useState([])

    // const {data, isLoading} = useQuery('products', ()=> fetch('http://localhost:5000/products').then(res=>res.json()));

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])


    return [products];
}

export default Products;
