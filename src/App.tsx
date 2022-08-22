import React from 'react';
import './App.css';
import { StarknetProvider, getInstalledInjectedConnectors } from '@starknet-react/core';
import TestPage from './pages/test';


function App() {
  const connectors = getInstalledInjectedConnectors();

  return (
    <StarknetProvider connectors={connectors}>
      <TestPage />
    </StarknetProvider>
    
  );
}

export default App;
