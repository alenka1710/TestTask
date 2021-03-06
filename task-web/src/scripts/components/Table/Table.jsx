import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import './Table.scss';

function redirectToDetails(item) {
  const { id } = item;
  return browserHistory.push(`edit/${id}`);
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.users,
    };
    this.renderTableRows = this.renderTableRows.bind(this);
    this.redirectToCreateUser = this.redirectToCreateUser.bind(this);
    this.deleteUserData = this.deleteUserData.bind(this);
  }

  componentDidMount() {
    this.props.usersData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      this.setState({ data: nextProps.users });
    }
  }

  redirectToCreateUser(indexBefore) {
    this.props.preCreate(indexBefore + 1, 'new');
  }

  deleteUserData(id) {
    this.props.fetchDeleteUserData(id);
  }

  renderTableRows(usersData) {
    const { showCount } = this.props.pagination;
    return usersData.filter((item, index) => index < showCount)
    .map((item, index) => (
      <tr
        key={item.id}
        className="table-userData__body"
      >
        <td className="body__cell">{item.name}</td>
        <td className="body__cell">{item.lastName}</td>
        <td className="body__cell">{item.email}</td>
        <td className="body__cell body__cell--add-func ">
          <div className="add-func__container">
            <i
              className="fa fa-plus"
              title="Create new item of list"
              aria-hidden="true"
              onClick={() => this.redirectToCreateUser(index)}
            />
            <i
              className="fa fa-pencil"
              title="Edit user data"
              aria-hidden="true"
              onClick={() => redirectToDetails(item)}
            />
            <i
              className="fa fa-trash-o"
              title="Delete item"
              onClick={() => this.deleteUserData(item.id)}
              aria-hidden="true"
            />
          </div>
        </td>
      </tr>
    ), this);
  }

  render() {
    // const { users } = this.props;
    return (
      <div>
        <table className="table-userData">
          <tbody>
            <tr className="table-userData__header">
              <th className="header__cell">First Name </th>
              <th className="header__cell">Last Name </th>
              <th className="header__cell">Email </th>
              <th />
            </tr>
            {this.renderTableRows(this.state.data)}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  usersData: PropTypes.func.isRequired,
  preCreate: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  fetchDeleteUserData: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired,
};

export default Table;
