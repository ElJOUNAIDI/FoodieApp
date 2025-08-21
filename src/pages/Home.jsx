import React from 'react'
import Header from '../Compenente/Header'
import CategoryMenu from '../Compenente/CategoryMenu'
import FoodItems from '../Compenente/FoodItems'
import Cart from '../Compenente/Cart'

export default function Home() {
  return (
    <>
      <Header />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  )
}
