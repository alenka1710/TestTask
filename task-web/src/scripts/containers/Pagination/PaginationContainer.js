import { connect } from 'react-redux';
import Pagination from './../../components/Pagination';
import { showMoreItems } from './PaginationActions';

const mapStateToProps = state => ({
  usersLength: state.userData.users.length,
  showCount: state.showCount,
});
const mapDispatchToProps = dispatch => ({
  showMoreItems: (count, listLength) => {
    dispatch(showMoreItems(count, listLength));
  },
  dispatch,
});

const pagination = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default pagination;
