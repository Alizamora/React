import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import ShowCard from './pages/showCard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} page={HomePage} exact/>
          <Route path={'/ShowCard'} page={ShowCard}  />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;