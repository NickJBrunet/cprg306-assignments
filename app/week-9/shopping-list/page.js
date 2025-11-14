/*

Author: Nick Brunet
Description: Week 9 assignment page
Modified: 2025-11-13

*/
"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import Header from '../../components/header.js';
import NewItem from './new-item.js'
import ItemList from './item-list.js'
import itemData from './items.json'
import MealIdeas from './meal-ideas.js'

export default function Page() {

	// Use the useUserAuth hook to get the user object to detect if they are logged in or not.
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

	const [items, setItems] = useState(itemData);
  const [ingredient, setIngredient] = useState(items[4].name);

	// Handler function for logging out
  async function logout(){
    // Sign out of Firebase
    await firebaseSignOut();
  }

	function handleAddItem(item){
		setItems([...items, item])
	}

  function handleIngredientChange(newIngredient){
    newIngredient = newIngredient.split(',')[0];
    setIngredient(newIngredient);
  }

	return (
		<main>
			<Header/>
			{user != null ?
				<div>
					<div className="w-full flex justify-center m-4">
						<button className="bg-red-200 p-2 rounded-sm hover:bg-red-300" onClick={logout}>Logout</button> 
					</div>
					<div className="flex justify-center">
						<div className="w-1/3 m-4 bg-gray-50">
							<NewItem onAddItem={handleAddItem}/>
						</div>
						<div className="w-full m-4 bg-gray-50">
							<ItemList highLevelItems={items} onIngredientChange={handleIngredientChange} />
						</div>
					</div>
					<div>
						<MealIdeas ingredient={ingredient}/>
					</div>
				</div>
			:
				<div className="w-full flex justify-center m-4">
					<p className="mt-2">You cannot access this content right now!</p> 
          <Link className="bg-green-200 p-2 rounded-sm hover:bg-green-300 ml-2 text-center" href="./">Login Page</Link> 
				</div>
			}
			
		</main>
	);
}	