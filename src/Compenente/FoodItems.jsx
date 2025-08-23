import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart'
import toast, { Toaster } from 'react-hot-toast';
export default function FoodItems() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const notify = () => toast.success('Food added to cart !');
  
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
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
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
            notify={notify}
             />
          })}
        </div>
      </div>
    </>
  )
}
