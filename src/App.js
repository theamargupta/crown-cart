import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/home-comp';
import ShopPage from './pages/shop/shop-comp';
import Header from './component/header/header-comp';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
// video 3
