import { User } from 'models/user.model';

const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_USERS_START':
      return {
        users: [] as User[],
        isFetching: true,
        error: false,
      };
    case 'GET_USERS_SUCCESS':
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };
    case 'GET_USERS_FAILURE':
      return {
        users: [] as User[],
        isFetching: false,
        error: true,
      };

    case 'CREATE_USER_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_USER_SUCCESS':
      return {
        users: [...state.users, action.payload],
        isFetching: false,
        error: false,
      };
    case 'CREATE_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case 'UPDATE_USER_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        users: state.users.map(
          (user: User) => user._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case 'UPDATE_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case 'DELETE_USER_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_USER_SUCCESS':
      return {
        users: state.users.filter((user: User) => user._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case 'DELETE_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case 'CHANGE_ADMIN_USER_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CHANGE_ADMIN_USER_SUCCESS':
      return {
        users: [
          ...state.users.filter(
            (user: User) => user._id !== action.payload._id
          ),
          action.payload,
        ],
        isFetching: false,
        error: false,
      };
    case 'CHANGE_ADMIN_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default UserReducer;
