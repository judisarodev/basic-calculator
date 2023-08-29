import './App.css';
import React, { useState } from 'react';
import { Container } from './components/Container';
import { FragmentProvider } from './context/FragmentContext';
import { Display } from './components/Display';
import { ConsoleProvider } from './context/ConsoleContext';
import { ButtonsContainer } from './components/ButtonsContainer';
import { ShowHistory } from './components/ShowHistory';
import { MainMenu } from './components/MainMenu';
import { Footer } from './components/Footer';
import { HowToContainer } from './components/HowToContainer';

function App() {

  return (
    <div>
      <MainMenu />
      <Container>
        <FragmentProvider>
          <ShowHistory />
          <ConsoleProvider>
            <Display/>
            <ButtonsContainer/>
          </ConsoleProvider>
          </FragmentProvider>
      </Container>
      <HowToContainer/> 
      <Footer />
    </div>
  );
}

export default App;
