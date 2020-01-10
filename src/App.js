import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/hompage/Hompage";

const HatsPage = () => {
    return (
        <div>
            <h1>HATS PAGE</h1>
        </div>
    );
}

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route pat='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
