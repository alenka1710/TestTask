import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './../configureStore';
import AppRouter from './../router';

export default class Root extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <AppRouter />
      </Provider>
    );
  }
}
