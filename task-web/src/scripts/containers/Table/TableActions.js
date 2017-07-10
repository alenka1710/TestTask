export const FETCH_USERS_DATA = 'FETCH_USERS_DATA';

export function fetchUsersData() {
  return {
    type: FETCH_USERS_DATA,
  };
}

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export function fetchUserData(id, data) {
  return {
    type: FETCH_USER_DATA,
    id,
    data,
  };
}

export const DELETE_USER_DATA = 'DELETE_USER_DATA';

export function fetchDeleteUserData(id) {
  return {
    type: DELETE_USER_DATA,
    id,
  };
}

export const PRE_SAVE = 'PRE_CREATE';

export function preCreate(index) {
  return {
    type: PRE_SAVE,
    index,
  };
}

export const CREATE_NEW_USER = 'CREATE_NEW_USER';

export function createNewUser(data) {
  return {
    type: CREATE_NEW_USER,
    data,
  };
}
