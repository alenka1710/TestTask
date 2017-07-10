import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import './Table.scss';

function redirectToDetails(item) {
  const { id } = item;
  // console.log(item);
  return browserHistory.push(`details/${id}`);
}
class Table extends Component {
  constructor(props) {
    super(props);
    this.renderTableRows = this.renderTableRows.bind(this);
  }

  componentDidMount() {
    this.props.usersData();
  }

  renderTableRows(usersData) {
    return usersData.map(item => (
      <tr
        key={item.id}
        className="table-userData__body"
      >
        <td className="body__cell">{item.name}</td>
        <td className="body__cell">{item.lastName}</td>
        <td className="body__cell">{item.email}</td>
        <td className="body__cell body__cell--add-item ">
          <i
            className="fa fa-plus"
            aria-hidden="true"
          />
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={() => redirectToDetails(item)}
          />
          <i className="fa fa-trash-o" aria-hidden="true" />
        </td>
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
            <th />
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
