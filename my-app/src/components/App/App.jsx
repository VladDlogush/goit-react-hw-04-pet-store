import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Nav from '../Nav/Nav';
import Loader from '../Loader/Loader';

const AsyncHomePage = Loadable({
  loader: () =>
    import('../../pages/Home/Home' /* webpackChunkName: "home-page" */),
  loading: Loader,
});

const AsyncPetPage = Loadable({
  loader: () =>
    import('../../pages/Pet/Pet' /* webpackChunkName: "pet-page" */),
  loading: Loader,
});

const AsyncPetsPage = Loadable({
  loader: () =>
    import('../../pages/Pets/Pets' /* webpackChunkName: "pets-page" */),
  loading: Loader,
});

const AsyncAboutPage = Loadable({
  loader: () =>
    import('../../pages/About/About' /* webpackChunkName: "about-page" */),
  loading: Loader,
});

const AsyncNotFoundPage = Loadable({
  loader: () =>
    import(
      '../../pages/NotFound/NotFound' /* webpackChunkName: "not-found-page" */
    ),
  loading: Loader,
});

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={AsyncHomePage} />
      <Route path="/pets/:id" component={AsyncPetPage} />
      <Route path="/pets" component={AsyncPetsPage} />
      <Route path="/about" component={AsyncAboutPage} />
      <Route component={AsyncNotFoundPage} />
    </Switch>
  </div>
);

export default App;
