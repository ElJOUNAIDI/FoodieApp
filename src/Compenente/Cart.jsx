import { useState } from 'react';
import ItemCard from './Item Card';
import { useSelector } from 'react-redux';
function Cart() {
    const [activeCart , setActiveCart] = useState(false)
    const cart = useSelector((state) => state.cart.cart)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <>
        <i className=" Cart_shopping fa-solid fa-cart-shopping" onClick={() => setActiveCart(true)}></i>
            <div className={`Cart fixed top-0 ${activeCart ? "active" : ""}`}>
                
                <div className='order d-flex justify-content-around align-items-center'>
                    <span>My Order</span>
                    <i className="close fa-solid fa-circle-xmark" onClick={() => setActiveCart(false)}></i>
                </div>
                <div className='container'>
                    {
                        cart.length > 0 ? cart.map((food) => {
                            return (
                                <ItemCard 
                                key={food.id} 
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                image={food.image}
                                quantity={food.quantity} />
                            )
                        }) :<h5> Your Cart is Empty</h5>
                    }
                </div>

                <div className='info_payer t-5'>
                    <h3>Items : {totalItems} </h3>
                    <h3>Total Amount : {totalAmount} $ </h3>
                    <hr />
                    <button className='btn btn-danger'>Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Cart;