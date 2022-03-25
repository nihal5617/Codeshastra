import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
      router('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signuphere = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signup(formData);
  
      dispatch({ type: AUTH, data });
  
      router('/');
    } catch (error) {
      console.log(error);
    }
  };