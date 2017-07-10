import { combineReducers } from 'redux';
import userData from './containers/Table/TableReducers';
import showCount from './containers/Pagination/PaginationReducers';

const rootReducer = combineReducers({
  userData,
  showCount,
});

export default rootReducer;
