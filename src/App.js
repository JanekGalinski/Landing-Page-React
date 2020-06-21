import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Nav></Nav> 
      <main>
        <LandingPage></LandingPage>
        <About></About>
      </main>
    </>
  );
}

export default App;
