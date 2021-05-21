import React from 'react';
import './App.css';
import Header from './Header.js'
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
        <Header />
        <Cards />
        <SwipeButtons />
    </div>
  );
}

export default App;
