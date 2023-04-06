import * as actionTypes from '../constants/actionTypes';

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
    firstName: null,
    lastName: null,
    Age: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: true,
                error: null,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                Age: action.payload.Age
            };
        case actionTypes.SIGN_IN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                error: null,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                Age: action.payload.Age
            };
        case actionTypes.SIGN_UP_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case actionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: null,
                firstName: null,
                lastName: null,
            };
        case actionTypes.SIGN_OUT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case actionTypes.RESET_AUTH_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
