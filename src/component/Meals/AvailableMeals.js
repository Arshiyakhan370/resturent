import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: ' A Hydrabad specialty!',
    price: 490,
  },
  {
    id: 'm2',
    name: 'Misal Pav',
    description: 'Maharashtra popular food ',
    price: 170,
  },
  {
    id: 'm3',
    name: 'Kosha Mangsho',
    description: 'West Bengal Traditional dish',
    price: 780,
  },
  {
    id: 'm4',
    name: 'Rogan Josh',
    description: 'kashmiri meat..',
    price: 650,
  },
  {
    id:  'm5',
    name: 'Masala Dosa',
    description: 'Traditional Food of South India' ,
    price: 230,
  },
  
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;