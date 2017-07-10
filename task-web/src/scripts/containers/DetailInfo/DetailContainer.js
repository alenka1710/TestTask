import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import DetailInfo from './../../components/DetailInfo';
import { fetchUserData, fetchDeleteUserData } from './../Table/TableActions';

const mapStateToProps = state => ({
  user: state.userData.users,
});
const mapDispatchToProps = dispatch => ({
  fetchUserInfo: (id, data, redirectRoute) => {
    dispatch(fetchUserData(id, data, redirectRoute));
    browserHistory.push(redirectRoute);
  },
  fetchDeleteUserData: (id, redirectRoute) => {
    dispatch(fetchDeleteUserData(id, redirectRoute));
    browserHistory.push(redirectRoute);
  },
  dispatch,
});

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailInfo);

export default Details;
