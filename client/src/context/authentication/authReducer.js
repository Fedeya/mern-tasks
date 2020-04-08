import {
  REGISTRY_ERROR,
  REGISTRY_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
  GET_USER
} from '../../types';

export default (state, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
    case REGISTRY_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        auth: true,
        message: null
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        auth: true
      }
    case LOG_OUT:
    case LOGIN_ERROR:
    case REGISTRY_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        message: action.payload,
        user: null,
        auth: null
      }
    default:
      return state;
  }
}