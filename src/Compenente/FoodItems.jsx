import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart'
export default function FoodItems() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch("https://free-food-menus-api-two.vercel.app/burgers");
        if (!res.ok) throw new Error("Erreur lors de la récupération des données");
        const data = await res.json();
        setFoodData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>❌ {error}</p>;
  return (
    <>
      <div className="container">
        <div className="row">
          {foodData.map((item) => {
            return <FoodCart 
            key={item.id}
            item={item}
            name={item.name}
            des={item.dsc}
            price={item.price}
            image={item.img}
             />
          })}
        </div>
      </div>
    </>
  )
}
