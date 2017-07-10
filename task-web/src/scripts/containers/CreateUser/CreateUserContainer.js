import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CreateUser from './../../components/CreateUser';
import { createNewUser } from './../Table/TableActions';

const mapStateToProps = state => ({
  users: state.userData.users,
  preCreate: state.userData.preCreate,
});
const mapDispatchToProps = dispatch => ({
  createNewUser: (data, redirectRoute) => {
    dispatch(createNewUser(data, redirectRoute));
    browserHistory.push(redirectRoute);
  },
  dispatch,
});

const Create = connect(mapStateToProps, mapDispatchToProps)(CreateUser);

export default Create;
