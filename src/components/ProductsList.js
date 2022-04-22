import React from 'react';

import Product from './Product';

export default function ProductsList(props) {
  
    return (
       props.productList.length >0 ?
       props.productList.map((product,i)=>{
           return <Product product={product} key ={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
       })
       :
       
       <h5 className='design text-center'>No Products in cart</h5>
   
    )
}
