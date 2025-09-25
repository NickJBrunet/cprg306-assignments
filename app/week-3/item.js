/*

Author: Nick Brunet
Description: Week 3 assignment component for each individual grocery item.
Modified: 2024-09-25

*/

export default function Item({props}) {
    return (
        <main className="flex justify-center">
            <ul className="bg-gray-200 text-center m-2 p-2 rounded-lg w-2/6">
                <li>{props.name}</li>
                <br></br>
                <li>Quantity: <span className="bg-white rounded-lg p-0.5">{props.quantity}</span></li>
                <li>Category: <span className="bg-white rounded-lg p-0.5">{props.category}</span></li>
            </ul>
        </main> 
    )
}
