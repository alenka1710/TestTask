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

