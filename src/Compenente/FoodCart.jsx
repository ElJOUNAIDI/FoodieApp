import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'

export default function FoodCart({id , name, price , image , des , notify}) {
  const dispatch = useDispatch()
  
  return (
    <>
         <div className="col-md-4">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text">{des}</p>
                <div className='d-flex justify-content-around align-items-center'>
                    <span>$ {price}</span>
                    <button onClick={() => dispatch(addToCart({id , name , price , image })) & notify()}
                     className="btn btn-warning">Add to cart</button>
                </div>
                </div>
            </div>
         </div>
    </>
  )
}
