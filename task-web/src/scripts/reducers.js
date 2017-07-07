import { combineReducers } from 'redux';
import userData from './containers/Table/TableReducers';

const rootReducer = combineReducers({
  userData,
});

export default rootReducer;
