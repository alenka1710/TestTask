import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import './Table.scss';

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderTableRows = this.renderTableRows.bind(this);
    this.redirectToDetails = this.redirectToDetails.bind(this);
  }

  componentDidMount() {
    this.props.usersData();
  }

  redirectToDetails(item) {
    const { id } = item;
    browserHistory.push(`details/${id}`);
    console.log(this.state);
  }

  renderTableRows(usersData) {
    return usersData.map(item => (
      <tr
        key={item.id}
        className="table-userData__body"
        onClick={() => this.redirectToDetails(item)}
      >
        <td className="body__cell">{item.name}</td>
        <td className="body__cell">{item.lastName}</td>
        <td className="body__cell">{item.email}</td>
      </tr>
    ), this);
  }

  render() {
    const { users } = this.props;
    return (
      <table className="table-userData">
        <tbody>
          <tr className="table-userData__header">
            <th className="header__cell">First Name </th>
            <th className="header__cell">Last Name </th>
            <th className="header__cell">Email </th>
          </tr>
          {this.renderTableRows(users)}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  usersData: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Table;
