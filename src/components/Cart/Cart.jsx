import React from 'react';
import Product from '../Product/Product';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props
    //console.log(cart);
    let total = 0;
    let totalShipping=0
    let quantity=0
    for(const Product of cart){
        console.log(Product.quantity);
        quantity=quantity+Product.quantity
        total=total+Product.price
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
             <button className='clear-btn'>Clear Cart</button>
             <button>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;