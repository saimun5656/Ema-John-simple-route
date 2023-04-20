import React from 'react';
import Product from '../Product/Product';
import './Cart.css'
import { faTrashAlt,faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = (props) => {
    const{cart,removeCart,children}=props
    //console.log(cart);
    let total = 0;
    let totalShipping=0
    let quantity=0
    for(const Product of cart){
        //console.log(Product.quantity);
        quantity=quantity+Product.quantity
        total=total+Product.price*Product.quantity
        totalShipping=totalShipping+Product.shipping
    }
    const tax=parseFloat((total*0.07).toFixed(2))
    const GrandTotal=(total+totalShipping+tax).toFixed(2)
    return (
        <div  className='cart-container'>
            <div className="cart">
            <h4>Order Summary!!!</h4>
             <p>Selected Items: {quantity}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping Charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
             <h4>Grand Total: ${GrandTotal}</h4>
             <button onClick={removeCart} className='clear-btn'>Clear Cart <FontAwesomeIcon className='icon' icon={faTrashAlt} /></button>
             
             {children}
            </div>
        </div>
    );
};

export default Cart;