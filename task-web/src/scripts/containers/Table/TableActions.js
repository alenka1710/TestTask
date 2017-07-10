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
