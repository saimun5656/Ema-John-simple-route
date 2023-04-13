import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removefromDb } from '../../utilities/mydb';

const Orders = () => {
    const savedCart =useLoaderData();
    const [cart,setCart]=useState(savedCart);
    console.log(cart);
    const removeItem=(id)=>{
        const remaining= cart.filter(pd=>pd.id!=id)
        setCart(remaining)
        removefromDb(id)
    }
    return (
        <div className='order-review-container'>
            <div className=''>
            {
                cart.map(product=><ReviewItem removeItem={removeItem} key={product.id} product={product}></ReviewItem>)
            }
              
            </div>
            <div className=''>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;