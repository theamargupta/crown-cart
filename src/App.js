import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/home-comp';
import ShopPage from './pages/shop/shop-comp';
import Header from './component/header/header-comp';
import SignInUp from './pages/sign-in-up/sign-comp'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
// video 3
