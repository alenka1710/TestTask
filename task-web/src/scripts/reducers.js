import { combineReducers } from 'redux';
import userData from './containers/Table/TableReducers';
import pagination from './containers/Pagination/PaginationReducers';

const rootReducer = combineReducers({
  userData,
  pagination,
});

export default rootReducer;
