import React from 'react';

function Cart() {
    return (
        <>
            <div className="Cart fixed top-0 ">
                {/* <i className="fa-solid fa-cart-shopping"></i> */}
                <i class="fa-solid fa-circle-xmark"></i>
                <span>My Order</span>
            </div>
        </>
    );
}

export default Cart;