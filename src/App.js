import './config/ReactoTronConfig';
import './config/StatusBarConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
