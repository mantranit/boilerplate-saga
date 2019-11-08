export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

const auth = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return { ...state, loading: true };
        case SIGN_IN_SUCCESS:
            return { ...state, auth: action.payload, loading: false };
        case SIGN_IN_FAILURE:
            return { ...state, auth: action.payload, loading: false };
        case SIGN_OUT_SUCCESS:
            return { ...state, auth: {} }
        default:
            return state;
    }
};
export default auth;