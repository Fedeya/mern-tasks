import React, { useReducer } from 'react';

import authContext from './authContext';
import authReducer from './authReducer';

import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import { 
  REGISTRY_ERROR, 
  REGISTRY_SUCCESS, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  LOG_OUT,
  GET_USER
} from '../../types';

function AuthState(props) {
  const initialState = {
    token: localStorage.getItem('token'),
    auth: null,
    user: null,
    message: null,
    loading: true
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registryUser = async data => {
    try {
      const res = await axiosClient.post('/users', data);
      dispatch({
        type: REGISTRY_SUCCESS,
        payload: res.data
      })
      userAuthenticated();
    } catch(err) {

      const alert = {
        msg: err.response.data.msg,
        category: 'alert-error'
      }

      dispatch({
        type: REGISTRY_ERROR,
        payload: alert
      })
    }
  }

  const userAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if(token) {
      tokenAuth(token);
    }

    try {
      const res = await axiosClient.get('/auth');
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    } catch(err) {
      dispatch({
        type: LOGIN_ERROR
      })
    }

  }

  const logIn = async data => {
    try {
      const res = await axiosClient.post('/auth', data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data 
      });

      userAuthenticated();
    }
    catch(err) {

      const alert = {
        msg: err.response.data.msg || err.response.data.errors[0].msg,
        category: 'alert-error'
      }

      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      });
    }
  }

  const logOut = async () => {
    dispatch({
      type: LOG_OUT
    })
  }

  return (
    <authContext.Provider
      value={{
        ...state,
        registryUser,
        logIn,
        userAuthenticated,
        logOut
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export default AuthState;