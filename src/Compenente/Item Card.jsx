import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart , decreaseQuantity , addToCart }  from '../redux/slices/CartSlice'

export default function ItemCard({id , name ,price , image ,quantity} ) {
    const dispatch = useDispatch()
    
  return (
    <>
        <div className="ItemCard row mt-2">
            <div className="col">
                <div className="card d-flex  flex-row justify-content-between align-items-center p-1">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className='d-flex'>
                        <h5 className="card-title fw-bold">{name}</h5>
                        <span className='price m-auto ms-3'>{price} $</span>
                    </div>
                    <div className='d-flex gap-2 align-items-center border '>
                        <i onClick={() => dispatch(addToCart({ id, name, price, image }))} className="fa-solid fa-plus"></i>
                        <span>{quantity}</span>
                        <i onClick={() => dispatch(decreaseQuantity(name))} className="fa-solid fa-minus"></i>
                    </div>
                    <i onClick={() => dispatch(removeFromCart(id))} className="delete fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    </>
  )
}
