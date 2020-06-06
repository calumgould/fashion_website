import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    CREATE_REQUEST,
    CREATE_SUCCESS,
    CREATE_FAILURE,
    PROFILE_IMAGE_REQUEST,
    PROFILE_IMAGE_SUCCESS,
    PROFILE_IMAGE_FAILURE,
} from "../actions/";

export default (
    state = {
        isLoggingIn: false,
        isLoggingOut: false,
        isVerifying: false,
        loginError: false,
        logoutError: false,
        isAuthenticated: false,
        isCreated: false,
        isCreating: false,
        createError: false,
        isUploaded: false,
        isUploading: false,
        uploadError: false,
        user: {},
    },
    action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: false
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                user: {},
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
            };
        case CREATE_REQUEST:
            return {
                ...state,
                isCreating: true,
                isVerifying: true,
            };
        case CREATE_SUCCESS:
            return {
                ...state,
                isVerifying: false,
                isCreating: false,
                isCreated: true,
                user: action.user
            };
        case CREATE_FAILURE:
            return {
                ...state,
                isVerifying: false,
                createError: true
            };
        case PROFILE_IMAGE_REQUEST:
            return {
                ...state,
                isUploading: true,
            };
        case PROFILE_IMAGE_SUCCESS:
            return {
                ...state,
                isUploading: false,
                isUploaded: true,
                user: action.user
            }
        case PROFILE_IMAGE_FAILURE:
            return {
                ...state,
                isUploading: false,
                uploadError: true
            }
        default:
            return state;
    }
};