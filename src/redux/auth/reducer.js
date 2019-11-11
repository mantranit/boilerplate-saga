import * as types from './index';

const auth = (state = {}, action) => {
    switch (action.type) {
        case types.SIGN_IN_REQUEST:
            return { ...state, loading: true };
        case types.SIGN_IN_SUCCESS:
        case types.SIGN_IN_FAILURE:
            const { loading, ...stateWithoutLoading } = state;
            return { ...stateWithoutLoading, ...action.payload };
        case types.SIGN_OUT_SUCCESS:
            const { token, ...stateWithoutToken } = state;
            return { ...stateWithoutToken };
        default:
            return state;
    }
};
export default auth;
