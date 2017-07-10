import { INC_COUNT } from './PaginationActions';
import createReducer from './../../utils/reduxUtils';

const initialState = {
  showCount: 4,
};

function requestShowCount(state) {
  return {
    ...state,
    isFetching: true,
  };
}

function recieveShowCount(state, action) {
  let { showCount } = state;
  const { listLength, count } = action;
  if (listLength - showCount > count) {
    showCount += action.count;
  }
  console.log(showCount);
  return {
    ...state,
    isFetching: false,
    showCount,
    listLength,
  };
}

const incCount = createReducer(initialState, {
  [`${INC_COUNT}__REQUEST`]: requestShowCount,
  [INC_COUNT]: recieveShowCount,
});

export default incCount;
