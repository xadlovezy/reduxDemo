import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import configureStore from './src/store';

const store = configureStore();

export default class App1 extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}