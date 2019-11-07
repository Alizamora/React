import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} page={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;