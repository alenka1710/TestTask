import React, { Component } from 'react';
import Table from './../../containers/Table/TableContainer';
import Pagination from './../../containers/Pagination/PaginationContainer';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <Table />
        <Pagination />
      </div>
    );
  }
}

export default MainPage;
