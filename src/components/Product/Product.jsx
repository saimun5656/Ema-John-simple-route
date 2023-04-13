import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const{img,name,price,seller,ratings}=props.product
    const addToCart = props.addToCart;
    return (
        <div className='product'>
           <div className='product-details'>
           <img src={img} alt=""/>
            <p className='heading'>{name}</p>
            <p className='price'>Price: ${price}</p>
            <p>manufacturer: {seller}</p>
            <p>rating: {ratings} star</p>
           </div>
            <button onClick={()=>addToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;