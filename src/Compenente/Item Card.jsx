import React from 'react'

export default function ItemCard() {
  return (
    <>
        <div className="ItemCard row mt-2">
            <div className="col">
                <div className="card d-flex  flex-row justify-content-between align-items-center p-1">
                    <img src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" className="card-img-top" alt="..." />
                    <div className='d-flex'>
                        <h5 className="card-title fw-bold">Card title</h5>
                        <span className='m-auto ms-3'>100 $</span>
                    </div>
                    <div className='d-flex gap-2 align-items-center border '>
                        <i className="fa-solid fa-plus"></i>
                        <span>1</span>
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <i class="delete fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    </>
  )
}
