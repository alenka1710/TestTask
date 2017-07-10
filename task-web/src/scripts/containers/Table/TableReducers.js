// import uuidv1 from 'uuid/v1';
import { FETCH_USERS_DATA, FETCH_USER_DATA, DELETE_USER_DATA } from './TableActions';
import createReducer from './../../utils/reduxUtils';

const initialUsersState = {
  users: [
    {
      id: '049bdd60-6542-11e7-bdd0-6b33c77121cb',
      name: 'Mable',
      lastName: 'Test',
      email: 'qwe@mail.ru',
    },
    {
      id: '049bdd61-6542-11e7-bdd0-6b33c77121cb',
      name: 'Nick',
      lastName: 'nick without lastName',
      email: 'Nicknick@mail.ru',
    },
    {
      id: '049bdd62-6542-11e7-bdd0-6b33c77121cb',
      name: 'Aliona',
      lastName: 'Sipchuk',
      email: 'alenka.sipchuk@gmail.com',
    },
    {
      id: '049bdd63-6542-11e7-bdd0-6b33c77121cb',
      name: 'Alex',
      lastName: 'Bruzgin',
      email: 'Nicknick@mail.ru',
    },
    {
      id: '049bdd64-6542-11e7-bdd0-6b33c77121cb',
      name: 'Marina',
      lastName: 'Adamchik',
      email: 'marusia@mail.ru',
    },
    {
      id: '049bdd65-6542-11e7-bdd0-6b33c77121cb',
      name: 'fake',
      lastName: 'fakefake',
      email: 'fake@mail.ru',
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
  // console.log(1);
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

function requestDeleteUserData(state) {
  return {
    ...state,
    isFetching: true,
  };
}

function recieveDeleteUserData(state, action) {
  const indexOfUpdatedItem = state.users.findIndex(item => item.id === action.id);
  const { users } = state;
  // users[indexOfUpdatedItem] = {
  //   id: action.id,
  //   ...action.data,
  // };
  users.splice(indexOfUpdatedItem, 1);
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
  [`${DELETE_USER_DATA}__REQUEST`]: requestDeleteUserData,
  [DELETE_USER_DATA]: recieveDeleteUserData,
});

export default userData;
