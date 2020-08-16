import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import ReactGA from 'react-ga';

import './App.css'

const App = () => {
  ReactGA.initialize('UA-175515182-1');

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
