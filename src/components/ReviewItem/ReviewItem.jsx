import React from 'react';
import './ReviewItem.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = ({product,removeItem}) => {
    const {name,price,quantity,shipping,img,id}=product
   
    return (
        <div className='review-container'>
           <div>
              <img className='item-img' src={img} alt="" />
           </div>

           <div className='details-container'>
            
            <div className='details'>
             <p className='item-name'>{name}</p>
             <p>prices:<span className='numbers'>${price}</span></p>
             <p>Shipping chrage: <span className='numbers'>${shipping}</span></p>
             </div>

             
             <button onClick={()=>removeItem(id)} className='icon-container'>
             <FontAwesomeIcon className='icon' icon={faTrashAlt} />
             </button>
             
            
           </div>

        </div>
    );
};

export default ReviewItem;