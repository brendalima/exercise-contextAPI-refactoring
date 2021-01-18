import React from 'react';
import './App.css';
import Cars from './Cars';
import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);

function App() {
  return (
    <Cars />
  );
}

export default App;
