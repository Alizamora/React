import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import ShowCard from './pages/showCard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={HomePage} exact />
        <Route path={'/ShowCard/:id'} component={ShowCard} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;