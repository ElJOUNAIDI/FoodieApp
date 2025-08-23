import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
export default function FoodItems() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const notify = (name) => toast.success(`${name} added to cart !`);

  const searchTerm = useSelector((state) => state.search.query);
  console.log(searchTerm);
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

  const filteredFood = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <div className="container">
        <div className="row">
          {filteredFood.length > 0 ? (
            filteredFood.map((item) => (
              <FoodCart 
                key={item.id}
                item={item}
                name={item.name}
                des={item.dsc}
                price={item.price}
                image={item.img}
                notify={notify}
              />
            ))
          ) : (
            <p>Aucun repas trouvé pour "{searchTerm}"</p>
          )}
        </div>
      </div>
    </>
  )
}
