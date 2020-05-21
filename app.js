import { NativeRouter, Route } from "react-router-native";
import Home from './Screens/home';
import Login from './Screens/login';
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return <NativeRouter>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
        </NativeRouter>
    }
}