import React from 'react'

export default function Footer(props) {
    return (
        <div className='row fixed-bottom footer'>
            <button className='btn btn-info text-white col-2' onClick={()=>{props.resetQuantity()}}><h5>Reset</h5></button>
          
            
            <h3 className='col-2'> <span className="badge bg-secondary">Total{"     "} ₹{props.total}</span>{" "}</h3>
            
           
            <button className='btn btn-info text-white col-2'>
                <h5>Pay now</h5>
            </button>
        </div>
    )
}
