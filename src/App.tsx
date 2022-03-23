import React from 'react';
import { Contact } from './components/contact/Contact';
import { Header } from './components/Header';
import { Name } from './components/Name';
import { Strengths } from './components/Strengths';
import { Works } from './components/Works';

import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Name/>
      <Strengths/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
