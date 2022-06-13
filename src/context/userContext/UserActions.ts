//Get USer

export const getUsersStart = () => ({
  type: 'GET_USERS_START',
});

export const getUsersSuccess = (users) => ({
  type: 'GET_USERS_SUCCESS',
  payload: users,
});

export const getUsersFailure = () => ({
  type: 'GET_USERS_FAILURE',
});

//Delete

export const deleteUserStart = () => ({
  type: 'DELETE_MOVIE_START',
});

export const deleteUserSuccess = (id) => ({
  type: 'DELETE_USER_SUCCESS',
  payload: id,
});

export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE',
});

//Update

export const updateUserStart = () => ({
  type: 'UPDATE_USER_START',
});

export const updateUserSuccess = (user) => ({
  type: 'UPDATE_USER_SUCCESS',
  payload: user,
});

export const updateUserFailure = () => ({
  type: 'UPDATE_USER_FAILURE',
});

//change admin status

export const changeAdminUserStart = () => ({
  type: 'CHANGE_ADMIN_USER_START',
});

export const changeAdminUserSuccess = (user) => ({
  type: 'CHANGE_ADMIN_USER_SUCCESS',
  payload: user,
});

export const changeAdminUserFailure = () => ({
  type: 'CHANGE_ADMIN_USER_FAILURE',
});
