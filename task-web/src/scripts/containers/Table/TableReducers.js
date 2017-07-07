import { FETCH_USERS_DATA, FETCH_USER_DATA } from './TableActions';
import createReducer from './../../utils/reduxUtils';

const initialUsersState = {
  users: [
    {
      id: 1,
      name: 'Mable',
      lastName: 'Test',
      email: 'qwe@mail.ru',
    },
    {
      id: 2,
      name: 'Nick',
      lastName: 'nick without lastName',
      email: 'Nicknick@mail.ru',
    },
    {
      id: 3,
      name: 'Aliona',
      lastName: 'Sipchuk',
      email: 'alenka.sipchuk@gmail.com',
    },
    {
      id: 4,
      name: 'Alex',
      lastName: 'Bruzgin',
      email: 'Nicknick@mail.ru',
    },
    {
      id: 5,
      name: 'Marina',
      lastName: 'Adamchik',
      email: 'marusia@mail.ru',
    },
  ],
};

function requestUsersData(state) {
  return {
    ...state,
    isFetching: true,
  };
}

function recieveUsersData(state) {
  return {
    ...state,
    isFetching: false,
  };
}

function requestUserData(state) {
  return {
    ...state,
    isFetching: true,
  };
}

function recieveUserData(state, action) {
  console.log(1);
  const indexOfUpdatedItem = state.users.findIndex(item => item.id === action.id);
  const { users } = state;
  users[indexOfUpdatedItem] = {
    id: action.id,
    ...action.data,
  };
  return {
    ...state,
    users,
    isFetching: false,
  };
}

const userData = createReducer(initialUsersState, {
  [`${FETCH_USERS_DATA}__REQUEST`]: requestUsersData,
  [FETCH_USERS_DATA]: recieveUsersData,
  [`${FETCH_USER_DATA}__REQUEST`]: requestUserData,
  [FETCH_USER_DATA]: recieveUserData,
});

export default userData;
