import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [];

const AvailableMeals = () => {
  const [DUMMY_MEALS, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://react-hooks-8fc22-default-rtdb.firebaseio.com/meals.json")
      .then((rep) => rep.json())
      .then((responseData) => {
        console.log(responseData);
        for (let key in responseData) {
          let tempObj = {
            id: key,
            ...responseData[key],
          };
          // DUMMY_MEALS.push(tempObj);
          setMeals((prevState) => [...prevState].concat(tempObj));
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.log("error message " + error.message);
      });
  }, []);
  // console.log(DUMMY_MEALS);
  let mealsList;
  if (loading) mealsList = "Loading....";
  else if (error !== null) mealsList = error;
  else {
    mealsList = DUMMY_MEALS.map((meal, i) => (
      <MealItem
        key={`meal_${i}`}
        price={meal.price}
        description={meal.description}
        name={meal.name}
      ></MealItem>
    ));
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
