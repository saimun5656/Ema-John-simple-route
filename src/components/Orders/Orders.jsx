import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteCart, removefromDb } from '../../utilities/mydb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const savedCart =useLoaderData();
    const [cart,setCart]=useState(savedCart);
    console.log(cart);
    const removeItem=(id)=>{
        const remaining= cart.filter(pd=>pd.id!=id)
        setCart(remaining)
        removefromDb(id)
    }
    const removeCart=()=>{
        setCart([])
        deleteCart()
    }
    return (
        <div className='order-review-container'>
            <div className=''>
            {
                cart.map(product=><ReviewItem removeItem={removeItem} key={product.id} product={product}></ReviewItem>)
            }
              
            </div>
            <div className=''>
               <Cart cart={cart} removeCart={removeCart}>
               <Link to='/checkout'><button className='checkout-btn'>Proceed Order<FontAwesomeIcon className='icon' icon={faMoneyBill} /></button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Orders;