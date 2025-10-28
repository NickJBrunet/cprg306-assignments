/*

Author: Nick Brunet
Description: Week 7 modified item component from week 6
Modified: 2025-10-22

*/


export default function Item({index, props}) {
	return (
		<div className="p-2">
			<ul className="p-2 border-1 border-gray-200 bg-gray-100 hover:bg-gray-200 rounded-md">
			<p className="text-left bg-gray-200 w-fit px-1">#{index + 1}</p>
				<li className="text-2xl">{props.name}</li>
				<div className="flex justify-around p-2">
					<li><span className="font-bold">QTY: </span>{props.quantity}</li>
					<li><span className="font-bold">CAT: </span>{props.category}</li>
				</div>
			</ul>
		</div>
	);
}