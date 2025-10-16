/*

Author: Nick Brunet
Description: Week 6 item component
Modified: 2025-10-16

*/


export default function Item({props}) {
  return (
    <div className="p-2 m-2">
      <ul className="p-2 m-2 border-1 border-gray-200 bg-gray-100 hover:bg-gray-200 rounded-md">
        <li className="text-2xl">{props.name}</li>
        <div className="flex justify-around p-2">
          <li><span className="font-bold">Quantity: </span>{props.quantity}</li>
          <li><span className="font-bold">Category: </span>{props.category}</li>
        </div>
      </ul>
    </div>
  );
}