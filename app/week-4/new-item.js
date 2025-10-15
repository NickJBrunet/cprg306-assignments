/*

Author: Nick Brunet
Description: 
             Week 4 assignment new-item component to adjust quantity of new grocery item.
             Week 5 will expand on this component.
             
Modified: 2025-09-25

*/

"use client";

import { useState } from 'react';

export default function NewItem() {

    // Use state to track quantity of new item
    const [quantity, setQuantity] = useState(1);
    // Button stylings based on quantity limits
    const borderRounded = "border-1 rounded-md"
    const buttonStyle = `${borderRounded} w-8 h-8`;
    const disabledButtonStyle = `${buttonStyle} opacity-50 cursor-not-allowed`;

    // Function to handle incrementing quantity of new item
    function incrementQuantity(){
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    // Function to handle decrementing quantity of new item
    function decrementQuantity(){
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex justify-center items-center gap-4 w-full p-4">
            <p className="p-4 align-middle">{quantity}</p>
            <button className={`${quantity < 20 ? buttonStyle : disabledButtonStyle} bg-green-300`} onClick={incrementQuantity}>+</button>
            <button className={`${quantity > 1 ? buttonStyle : disabledButtonStyle} bg-red-300`} onClick={decrementQuantity}>-</button>
        </div>
    )
}