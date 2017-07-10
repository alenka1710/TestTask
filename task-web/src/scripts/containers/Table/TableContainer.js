import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Table from './../../components/Table';
import { fetchUsersData, preCreate, fetchDeleteUserData } from './TableActions';

const mapStateToProps = state => ({
  users: state.userData.users,
  pagination: state.pagination,
});
const mapDispatchToProps = dispatch => ({
  usersData: () => {
    dispatch(fetchUsersData());
  },
  preCreate: (index, redirectRoute) => {
    dispatch(preCreate(index));
    browserHistory.push(redirectRoute);
  },
  fetchDeleteUserData: (id, redirectRoute) => {
    dispatch(fetchDeleteUserData(id, redirectRoute));
    browserHistory.push(redirectRoute);
  },
  dispatch,
});

const Users = connect(mapStateToProps, mapDispatchToProps)(Table);

export default Users;
