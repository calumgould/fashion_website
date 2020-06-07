import { myFirebase } from '../firebase/firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_FAILURE = 'CREATE_FAILURE';

export const PROFILE_IMAGE_REQUEST = 'PROFILE_IMAGE_REQUEST';
export const PROFILE_IMAGE_SUCCESS = 'PROFILE_IMAGE_SUCCESS';
export const PROFILE_IMAGE_FAILURE = 'PROFILE_IMAGE_FAILURE';

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = user => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = user => {
  return {
    type: LOGOUT_SUCCESS,
    user
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = user => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = user => {
  return {
    type: VERIFY_SUCCESS,
    user
  };
};

const requestCreateUser = () => {
  return {
    type: CREATE_REQUEST
  };
};

const receiveCreateUser = (user) => {
  return {
    type: CREATE_SUCCESS,
    user
  };
};

const createUserError = () => {
  return {
    type: CREATE_FAILURE
  };
};

const requestProfileImageUpload = () => {
  return {
    type: PROFILE_IMAGE_REQUEST
  };
};

const receiveProfileImageUpload = (user) => {
  return {
    type: PROFILE_IMAGE_SUCCESS,
    user
  };
};

const profileImageUploadError = () => {
  return {
    type: PROFILE_IMAGE_FAILURE
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
      console.log(user);
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(error => {
      dispatch(loginError());
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(receiveLogin(user));
      }
      dispatch(verifySuccess());
    });
};

export const createUser = (email, password, displayName) => dispatch => {
  dispatch(requestCreateUser())
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userDetails => {
      return userDetails.user.updateProfile({
        displayName: displayName,
        photoURL: `${require('../assets/images/placeholderProfile.png')}`
      })
    })
    .then(user => {
      dispatch(receiveCreateUser(user))
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(error => {
      dispatch(createUserError());
    });
};

export const uploadUserProfileImage = (imageURL) => dispatch => {
  dispatch(requestProfileImageUpload())
  myFirebase
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        user.updateProfile({
          photoURL: imageURL
        })
        dispatch(receiveProfileImageUpload(user))
      } else {
        dispatch(profileImageUploadError())
      }
    })
};
