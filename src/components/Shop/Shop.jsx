import React, { useEffect, useState } from 'react';
import { addToDb, getCart } from '../../utilities/mydb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const [cart, setCart]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart=getCart()
        const cart=[]
        for(const id in storedCart){
            const savedProduct=products.find((product)=>product.id===id)
            if(savedProduct){
                const quantity=storedCart[id]
                savedProduct.quantity=quantity
                cart.push(savedProduct)
               // console.log(cart);
            } 
          setCart(cart)
        }
    },[products])

const addToCart=product=>{
   const curent=cart.find(cartpd=>cartpd.id===product.id)
   if(!curent){
     product.quantity=1
     setCart([...cart,product])
   }
   else{
    curent.quantity=curent.quantity+1
    const remaining=cart.filter((cartpd)=>cartpd.id!==product.id)
    setCart([...remaining,curent])
   }
   addToDb(product.id)
}
    return (
        <div className='shop-container'>
            <div className='products-container'>
             {
                products.map((product)=><Product 
                product={product} 
                key={product.id}
                addToCart={addToCart}
                ></Product>)
             }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>   
        </div>
    );
};

export default Shop;