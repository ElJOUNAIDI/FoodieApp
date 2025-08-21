import React from 'react'
import FoodCart from './FoodCart'
import  FoodData from '../data/dataFood'
export default function FoodItems() {

  return (
    <>
      <div className="container">
        <div className="row">
          {FoodData.map((item) => {
            return <FoodCart 
            key={item.id}
            item={item}
            name={item.name}
            price={item.menu[0].price}
            image={item.image}
             />
          })}
        </div>
      </div>
    </>
  )
}
