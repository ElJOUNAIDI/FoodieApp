import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Compenente/Header';

export default function Home1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://68ab38c5909a5835049e0afa.mockapi.io/api/food")
      .then((response) => response.json())
      .then((json) => {
        setData(json);  
        console.log("Données reçues :", json);      
        setLoading(false);    
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <>
    <Header />
      <div className="container mt-5">
      <h1>Liste des Restaurants</h1>
      <div className="row restaurant-list">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={item.image} className="card-img-top" alt="..." />
                <h5 className="card-title">{item.restaurantName}</h5>
                <p className="card-text">{item.address}</p>
                <p className="card-text">{item.type}</p>
              </div>
              <Link to={`/`} className='btn btn-primary'>Menu</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
