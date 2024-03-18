import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch("http://localhost:3000/meals");
      if (!res.ok) {
        // return throw new Error("Fail to fetch data");
      }
      const data = await res.json();
      setLoadMeals(data);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
