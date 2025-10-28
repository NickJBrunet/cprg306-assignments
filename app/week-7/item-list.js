/*

Author: Nick Brunet
Description: Week 7 modified item list component from week 6
Modified: 2025-10-22

*/
"use client";

import {useState} from "react";
import Item from "./item.js";

export default function ItemList({highLevelItems}) {

    const [sortBy, setSortBy] = useState("name");
    let items = [...highLevelItems].sort(sortItems);


    function handleSortChange(event){
        setSortBy(event.target.value);
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
                    <label htmlFor="sortType" className="text-xl pr-2">Sort Items By:</label>
                    <select 
                        onChange={handleSortChange}
                        id="sortType"
                        value={sortBy}
                        className="w-fit p-2 m-1 border-1 bg-gray-100 border-gray-200 rounded-md">
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                    </select>
                </div>
            </div>
            <br></br>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 text-center">
                    {items.map((item, index) => 
                        <Item key={index} index={index} props={item}/>)
                    }
                </div>
            </div>
        </div>
    );
}