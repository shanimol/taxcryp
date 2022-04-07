import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { RoutesPath } from '@app/routes';

const HomePage = lazy(() => import('@app/pages/homepage'));

const HomeLayout = () => {
  return (
    <div className="flex ">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={RoutesPath.HOME} component={HomePage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default HomeLayout;
