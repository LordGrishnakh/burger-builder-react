import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  isSignedIn: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      }
      case actionTypes.SIGN_IN_GOOGLE:
      return {
        ...state,
        isSignedIn: true,
        token: action.token,
        userId: action.userId
      }
    case actionTypes.SIGN_OUT_GOOGLE:
      return {
        ...state,
        token: null,
        isSignedIn: false,
        userId: null
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        isSignedIn: true,
        error: null,
        loading: false
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        isSignedIn: false,
        userId: null
      }
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path
      }
  
    default:
      return state;
  }
};

export default reducer;