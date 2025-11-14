/*

Author: Nick Brunet
Description: Week 8 modified item component from week 6
Modified: 2025-11-05

*/

export default function Item({index, props, onItemSelect}) {
	return (
		<li className="p-2" onClick={() => (onItemSelect(props.name))}>
			<div className="p-2 border-1 border-gray-200 bg-gray-100 hover:bg-gray-200 rounded-md">
				<p className="text-left bg-gray-200 w-fit px-1">#{index + 1}</p>
				<p className="text-2xl">{props.name}</p>
				<div className="flex justify-around p-2">
					<p><span className="font-bold">QTY: </span>{props.quantity}</p>
					<p><span className="font-bold">CAT: </span>{props.category}</p>
				</div>
			</div>
		</li>
	);
}