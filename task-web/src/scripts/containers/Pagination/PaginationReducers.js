import { INC_COUNT } from './PaginationActions';
import createReducer from './../../utils/reduxUtils';

const initialState = {
  showCount: 4,
  stopPagination: false,
};

function requestShowCount(state) {
  return {
    ...state,
    isFetching: true,
  };
}

function recieveShowCount(state, action) {
  let { showCount, stopPagination } = state;
  const { listLength, count } = action;
  if (showCount < listLength) {
    showCount += count;
    stopPagination = false;
  }
  if (showCount >= listLength) {
    stopPagination = true;
  }
  return {
    ...state,
    isFetching: false,
    showCount,
    listLength,
    stopPagination,
  };
}

const incCount = createReducer(initialState, {
  [`${INC_COUNT}__REQUEST`]: requestShowCount,
  [INC_COUNT]: recieveShowCount,
});

export default incCount;
