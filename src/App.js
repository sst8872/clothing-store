import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/hompage/HomePage";
import ShopPage from "./pages/shopage/ShopPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
