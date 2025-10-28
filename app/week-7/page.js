/*

Author: Nick Brunet
Description: Week 7 assignment page
Modified: 2025-10-14

*/
"use client";

import {useState} from "react";
import Header from '../components/header.js';
import NewItem from './new-item.js'
import ItemList from './item-list.js'
import itemData from './items.json'

export default function Page() {

	const [items, setItems] = useState(itemData);

	function handleAddItem(item){
		setItems([...items, item])
	}

	return (
		<main>
			<Header/>
			<div className="flex justify-center">
				<div className="w-1/3 m-4 bg-gray-50">
					<NewItem onAddItem={handleAddItem}/>
				</div>
				<div className="w-full m-4 bg-gray-50">
					<ItemList highLevelItems={items} />
				</div>
			</div>
		</main>
	);
}	