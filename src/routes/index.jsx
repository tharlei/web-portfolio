import React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route.jsx';

import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="*" />
    </Switch>
  )
}

export default Routes;