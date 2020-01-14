import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from "./pages/hompage/HomePage";
import ShopPage from "./pages/shopage/ShopPage";
import SignInSignUp from "./pages/signIn-signUp/SignInSignUp";
import Header from "./components/header/Header";
import { auth } from "./firebase/fbConfig";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render () {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={Homepage}></Route>
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
