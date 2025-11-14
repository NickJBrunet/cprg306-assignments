/*

Author: Nick Brunet
Description: Week 9 modified component for firebase
Modified: 2025-11-13

*/


"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {

  	const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  	const data = await res.json();

	if (!data.meals) {
		return [];
	}

  	return data.meals;
}

export default function MealIdeas({ ingredient }) {
  	const [meals, setMeals] = useState([]);

	useEffect(() => {
		async function loadMealIdeas() {
			setMeals(await fetchMealIdeas(ingredient));
		}
		loadMealIdeas();
	}, [ingredient]);

	return (
		<div className="p-4">
			<h2>Meal Ideas for: {ingredient}</h2>
			<p>Select an item to view meal ideas.</p>
			<ul>
				{meals.map((meal) => (
					<li key={meal.idMeal}>
						<img src={meal.strMealThumb} alt={meal.strMeal}/>
						<p>{meal.strMeal}</p>
					</li>
				))}
			</ul>
		</div>
	);
}