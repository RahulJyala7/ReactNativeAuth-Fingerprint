import React, { Component } from 'react';
import Background from '../Components/background'
import Header from '../Components/header';

export default class HomeComponent extends Component {
    render() {
        return (
            <Background>
                <Header>Hey User</Header>
            </Background>
        )
    }
}