import React from 'react';
import Header from './Header.js'
import './App.css';
import Cards from "./Cards";

function App() {
  return (
    //BEM class name convention
    <div className="app">
        <Header />
        <Cards />
        {/*swipeButtons*/}
    </div>
  );
}

export default App;
