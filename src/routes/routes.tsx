import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import RouteLayout from '@app/layouts/RouteLayout';
import RoutesPath from './routesPath';

export default (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Switch>
        <Redirect from={RoutesPath.DEFAULT}  exact={true} to={RoutesPath.DEFAULT} />
        <Route path={RoutesPath.ALL} component={RouteLayout} />
      </Switch>
    </Router>
  </ Suspense>
);
