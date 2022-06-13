import { User } from 'models/user.model';

import { api } from '../../services/api';
import {
  changeAdminUserFailure,
  changeAdminUserStart,
  changeAdminUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from './UserActions';

export const getUsers = async (dispatch: {
  (value: any): void;
  (arg0: { type: string; payload?: any }): void;
}) => {
  dispatch(getUsersStart());
  try {
    const res = await api.get('/users', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (
  id: string,
  dispatch: {
    (value: any): void;
    (arg0: { type: string; payload?: any }): void;
  }
) => {
  dispatch(deleteUserStart());
  try {
    await api.delete('/users/' + id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (
  user: User,
  dispatch: (arg0: { type: string; payload?: any }) => void
) => {
  dispatch(updateUserStart());
  try {
    const res = await api.put('/users/' + user._id, user, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(updateUserSuccess(res.data));
  } catch (error) {
    dispatch(updateUserFailure());
  }
};

export const changeAdminUser = async (
  user: User,
  dispatch: (arg0: { type: string; payload?: any }) => void
) => {
  dispatch(changeAdminUserStart());
  try {
    const res = await api.get(
      `/users/${user._id}/${user.isAdmin ? 'false' : 'true'}`,
      {
        headers: {
          token:
            'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        },
      }
    );
    dispatch(changeAdminUserSuccess(res.data));
  } catch (error) {
    dispatch(changeAdminUserFailure());
  }
};
