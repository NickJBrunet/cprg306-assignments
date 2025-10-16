/*

Author: Nick Brunet
Description: 
             Week 5 assignment; create a new item with a name, 
             select its quantity and category.

             Use of Week 4 increment/decrement button code

References:
            use of: https://react.dev/reference/react-dom
            for how react handles its components in more depth
             
Modified: 2025-10-14

*/

"use client";

import {useState} from "react";

export default function NewItem(){

	// All unique categories found in week-3 item-list.js, in order.
	const categories = ["Dairy", "Bakery", "Produce", "Meat", "Canned goods", "Dry goods", "Household"];

	// Use states
	const [name, setName] = useState("");
	const [category, setCategory] = useState(categories[0]);
	const [quantity, setQuantity] = useState(1);

	// Button stylings based on quantity limits
	const borderRounded = "border-1 rounded-md";
	const buttonStyle = `${borderRounded} w-6 h-6`;
	const disabledButtonStyle = `${buttonStyle} opacity-50 cursor-not-allowed`;

	// Function to handle incrementing quantity of new item
	function incrementQuantity() {
		if (quantity < 20) {
			setQuantity(quantity + 1);
		}
	}

	// Function to handle decrementing quantity of new item
	function decrementQuantity() {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	// State Handlers

	// Handle Name Change
	function handleNameChange(event) {
		setName(event.target.value);
	}

	// Handle Category Change
	function handleCategoryChange(event) {
		setCategory(event.target.value);
	}

	// Handle Quantity Change
	function handleQuantityChange(event) {
		setQuantity(event.target.value);
	}

	// Handle adding New Item
	function handleSubmit(event) {
		event.preventDefault();

		const newItem = {
			name: name,
			category: category,
			quantity: quantity
		}

		alert(`New Item has been Added: \n - Name: ${newItem.name} \n - Category: ${newItem.category} \n - Quantity: ${newItem.quantity}`)
		console.log(newItem);

		// Reset to default values
		setName("");
		setCategory(categories[0]);
		setQuantity(1);
	}

	
	return (
		<div>
			<form onSubmit={(event) => handleSubmit(event)} className="flex justify-center p-10">

				<div className="flex flex-col gap-y-2">
					{/* Name input field section */}
					<div className="flex justify-center">				
						<label name="name" className="pr-1">Item Name: </label>
						<input name="name" value={name} onChange={(event) => handleNameChange(event)} placeHolder="Enter name."
								className="pl-1 border-1 w-1/2"/>
					</div>

					{/* Category selection form */}
					<div className="flex justify-center">
						<label name="category" className="pr-2">Category: </label>
						<select name="category" value={category} onChange={event => handleCategoryChange(event)} defaultValue={categories[0]}>

							{categories.map((category) => (	
								<option value={category}>{category}</option>
							))}

						</select>
					</div>

					{/* Quantity button section */}
					<div className="flex justify-center">

						<label name="quantity" className="pr-2">Quantity: </label>
						<div className="flex gap-x-2">
							<input type="text" name="quantity" value={quantity} onChange={(event) => handleQuantityChange(event)} placeHolder="1" readOnly
									className="w-6 border-1 text-center text-gray-500"/>

							<button type="button" className={`${quantity < 20 ? buttonStyle : disabledButtonStyle} bg-green-300`} onClick={incrementQuantity}>+</button>
							<button type="button" className={`${quantity > 1 ? buttonStyle : disabledButtonStyle} bg-red-300`} onClick={decrementQuantity}>-</button>
						</div>

					</div>

					{/* Submit Button */}
					<div className="flex justify-content b-2 p-2">	
						<button type="submit" className="border-1 w-full rounded-md bg-gray-100 hover:bg-green-100">Add New Item</button>
					</div>
				</div>
			</form>
		</div>
	)

}
