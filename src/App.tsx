import React from 'react';
import { Header } from './components/Header';
import { Name } from './components/Name';
import { Strengths } from './components/Strengths';
import { Works } from './components/Works';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Name/>
      <Strengths/>
      <Works/>
    </div>
  );
}

export default App;
