import React from 'react'

export default function CategoryMenu() {
  return (
    <>
      <div className='container p-4'>
        <h3 className='fw-bold'>Find the best food</h3> 
        <div className='d-flex flex-wrap gap-2'>
            <button className='btn btn-warning'>All</button>
            <button className='btn btn-warning'>Lunch</button>
            <button className='btn btn-warning'>Breakfast</button>
            <button className='btn btn-warning'>Dinner</button>
            <button className='btn btn-warning'>Snacks</button>
        </div>
      </div>
    </>
  )
}
