import React from 'react';
import ItemCard from './Item Card';

function Cart() {
    return (
        <>
            <div className="Cart fixed top-0 ">
                {/* <i className="fa-solid fa-cart-shopping"></i> */}
                <div className='order d-flex justify-content-around align-items-center'>
                    <span>My Order</span>
                    <i className="close fa-solid fa-circle-xmark"></i>
                </div>
                <div className='container'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>

                <div className='info_payer t-5'>
                    <h3>Items : </h3>
                    <h3>Total Amount : </h3>
                    <hr />
                    <button className='btn btn-danger'>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Cart;