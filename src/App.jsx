import React, { useRef } from 'react';
import './App.css';

import Dresses from './components/Dresses'

const App = () => {

  const ref =   useRef()

  const chooseDress = (e) => {
    const src = e.target.src
    console.log(src)
    
    ref.current.src = src
  }
  return (
    <main>
      <h1>Welcome to Dressing up</h1>
      <div>
        <img src="images/white_doll.png"></img>
        <img src="images/red_dress.png" alt="" id="current" ref={ref} />
      </div>
      <Dresses chooseDress={chooseDress} />

    </main>
  );
}

export default App;

