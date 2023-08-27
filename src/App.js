import './App.css';
import React, { useState } from 'react';
import { Container } from './components/Container';
import { Title } from './components/Title';
import { Display } from './components/Display';
import { ConsoleProvider } from './context/ConsoleContext';
import { ButtonsContainer } from './components/ButtonsContainer';
import { ShowHistory } from './components/ShowHistory';

function App() {

  return (
    <Container>
      <Title/>
      <ShowHistory />
      <ConsoleProvider>
        <Display/>
        <ButtonsContainer/>
      </ConsoleProvider>
    </Container>
  );
}

export default App;
