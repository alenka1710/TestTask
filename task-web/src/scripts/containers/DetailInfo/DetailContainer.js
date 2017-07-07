import { connect } from 'react-redux';
import DetailInfo from './../../components/DetailInfo';
import { fetchUserData } from './../Table/TableActions';

const mapStateToProps = state => ({
  user: state.userData.users,
});
const mapDispatchToProps = dispatch => ({
  fetchUserInfo: (id, data) => {
    dispatch(fetchUserData(id, data));
  },
  dispatch,
});

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailInfo);

export default Details;
