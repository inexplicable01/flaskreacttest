import * as actionTypes from '../constants/actionTypes';
import { auth } from '../firebaseConfig';

export const signUp = (email, password) => async (dispatch) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch({ type: actionTypes.SIGN_UP_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: actionTypes.SIGN_UP_ERROR, payload: error.message });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: actionTypes.SIGN_IN_ERROR, payload: error.message });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: actionTypes.SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.SIGN_OUT_ERROR, payload: error.message });
  }
};

export const resetAuthError = () => ({
  type: actionTypes.RESET_AUTH_ERROR,
});
