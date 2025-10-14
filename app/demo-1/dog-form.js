"use client";

import { useState } from "react";

export default function DogForm(){

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');

    // Main form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let dog = { name, breed, age };
        console.log(dog);
    }

    // Individual input change handlers

    // Name input change handler
    const handleNameChange = (event) => {
        let name = event.target.value;
        
        (name.length <= 10 || name.length >= 2) ?
            setName(event.target.value) : null;
    }
    
    // Age input change handler
    const handleAgeChange = (event) => {
        let age = event.target.value;

        (age > 0) ?
            setAge(event.target.value) : null;
    }

    // Breed input change handler
    const handleBreedChange = (event) => {
        let breed = event.target.value;

        (breed.length > 1) ?
            setBreed(event.target.value) : null;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />

                <label htmlFor="age">Age: </label>
                <input type="text" id="age" value={age} onChange={handleAgeChange} />
                
                <label htmlFor="breed">Breed: </label>
                <input type="text" id="breed" value={breed} onChange={handleBreedChange} />
            </form>
            <div>
                <h2>Dog Information:</h2>

                {(name.length > 10 || name.length < 2)
                    ? <p className="text-red-500">Name must be 2-10 characters!</p> 
                    : <p className="text-green-200">Name: {name}</p>
                }

                {age < 0 
                    ? <p className="text-red-500">Age must be greater than or equal to 0!</p> 
                    : <p className="text-green-200">Age: {age}</p>
                }

                {breed.length > 0
                    ? <p className="text-red-500">Breed is undefined!</p> 
                    : <p className="text-green-200">Breed: {breed}</p>
                }
            </div>
        </div>
    )
}