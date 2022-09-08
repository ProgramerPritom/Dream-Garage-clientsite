import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Products = () =>{
    const [products, setProducts] = useState([])

    // const {data, isLoading} = useQuery('products', ()=> fetch('https://whispering-meadow-28819.herokuapp.com/products').then(res=>res.json()));

    useEffect(()=>{
        fetch('https://whispering-meadow-28819.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[])


    return [products];
}

export default Products;
