import React from 'react';
import API from './pages/homepage';
import Favoritos from './pages/favorites';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={API} exact />
          <Route path={"/favoritos"} component={Favoritos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
