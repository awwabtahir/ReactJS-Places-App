import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({places}) => (
  <ul>
      {places.map(place => 
          <li key={place.id}>{place.name} | state: {place.state}</li>    
      )}
  </ul>
)

export default App;
