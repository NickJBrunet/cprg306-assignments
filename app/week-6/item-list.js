/*

Author: Nick Brunet
Description: Week 6 item list component
Modified: 2025-10-22

*/
"use client";

import {useState} from "react";
import ItemData from "./items.json";
import Item from "./item";

export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");
    const [items, setItems] = useState(ItemData);

    function handleSortChange(event){
        setSortBy(event.target.value);
    }

    function handleSorting(){
        setItems([...items].sort(sortItems));
    }

    function sortItems(itemA, itemB){

        if (sortBy === "name") {
            if (itemA.name > itemB.name){
                return 1;
            } else if (itemA.name === itemB.name) {
                return 0;
            } else if (itemA.name < itemB.name) {
                return -1;
            }
        } else if (sortBy === "quantity") {
            // Make quantity in descending order
            if (itemA.quantity > itemB.quantity){
                return -1;
            } else if (itemA.quantity === itemB.quantity) {
                return 0;
            } else if (itemA.quantity < itemB.quantity) {
                return 1;
            }
        } else if (sortBy === "category") {
            if (itemA.category > itemB.category){
                return 1;
            } else if (itemA.category === itemB.category) {
                return 0;
            } else if (itemA.category < itemB.category) {
                return -1;
            }
        }
    }

    return (
        <div>
            <div className="flex justify-center text-center flex-col">
                <div>
                    <p className="font-bold text-2xl">Sort By:</p>
                    <select 
                        onChange={handleSortChange}
                        value={sortBy}
                        className="w-fit p-2 m-2 border-1 bg-gray-100 border-gray-200 rounded-md">
                        <option value="name">Name</option>
                        <option value="quantity">Quantity</option>
                        <option value="category">Category</option>
                    </select>
                    <br></br>
                    <button onClick={handleSorting} className="w-fit p-2 border-1 bg-gray-100 hover:bg-green-100 border-gray-200 rounded-md">Sort Items</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 text-center w-1/3">
                    {items.map((item, index) => 
                        <Item key={index} props={item}/>)
                    }
                </div>
            </div>
        </div>
    );
}