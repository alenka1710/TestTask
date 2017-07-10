import React, { Component } from 'react';
import Pagination from './../../containers/Pagination/PaginationContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
        <Pagination />
      </div>
    );
  }
}

export default App;
