import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import HomePage from '../../pages/Home/Home';
import PetPage from '../../pages/Pet/Pet';
import PetsPage from '../../pages/Pets/Pets';
import AboutPage from '../../pages/About/About';
import NotFoundPage from '../../pages/NotFound/NotFound';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
