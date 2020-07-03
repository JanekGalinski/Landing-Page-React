import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Offer from './Components/Offer/Offer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <LandingPage />
        <About />
        <Offer />
      </main>
    </>
  );
}

export default App;