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
        case SIGN_IN_FAILURE:
            const { loading, ...stateWithoutLoading } = state;
            return { ...stateWithoutLoading, ...action.payload };
        case SIGN_OUT_SUCCESS:
            const { token, ...stateWithoutToken } = state;
            return { ...stateWithoutToken };
        default:
            return state;
    }
};
export default auth;
