import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route.jsx';

import Home from '../pages/Home';
import About from '../pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={Home} path="*" />
    </Switch>
  )
}

export default Routes;