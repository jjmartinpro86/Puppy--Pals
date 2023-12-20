import React, { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(id) {
    // Some logic here
    setFeatPupId(id);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div>
      <div id='puppy-container'>
        {puppies.map((puppy) => {
          return (
            <div className='puppy' key={puppy.id}>
              <p
                onClick={() => {
                  handleClick(puppy.id);
                }}
              >
                {puppy.name}
              </p>
            </div>
          );
        })}
      </div>
      {featPupId && (
        <div className='details'>
          <h2>Name: {featuredPup.name}</h2>
          <ul>
            <li>age: {featuredPup.age}</li>
            <li>email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
