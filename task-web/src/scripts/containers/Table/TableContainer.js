import { connect } from 'react-redux';
import Table from './../../components/Table';
import { fetchUsersData } from './TableActions';

const mapStateToProps = state => ({
  users: state.userData.users,
});
const mapDispatchToProps = dispatch => ({
  usersData: () => {
    dispatch(fetchUsersData());
  },
  dispatch,
});

const Users = connect(mapStateToProps, mapDispatchToProps)(Table);

export default Users;
