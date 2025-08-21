import React from 'react'
export default function FoodCart({id , name, price , image}) {
  return (
    <>
         <div className="col-md-4">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text">
                </p>
                <div className='d-flex justify-content-around align-items-center'>
                    <span>$ {price}</span>
                    <button className="btn btn-warning">Add to cart</button>
                </div>
                
                </div>
            </div>
         </div>
    </>
  )
}
