import React, { useCallback } from 'react';
import { Contact } from './components/contact/Contact';
import { Header } from './components/Header';
import { Name } from './components/home/Name';
import { Strengths } from './components/strengths/Strengths';
import { Works } from './components/works/Works';

import './App.css';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const onClickAbout = useCallback(() => navigate("/profile"), [navigate]);

  return (
    <div className="App">
      <Header/>
      <Name/>
      <Strengths/>
      <Works/>
      <Contact/>
      <Footer hrefTop={'#'} onClickAbout={onClickAbout} hrefWork={'#work'} text={'Top'}/>
    </div>
  );
}

export default App;
