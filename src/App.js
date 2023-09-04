import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const ListPage = lazy(() => import('./pages/ListPage/'));
const ViewPage = lazy(() => import('./pages/ViewPage'));

function App() {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
