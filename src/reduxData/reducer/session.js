const initialState = {
    userSession: null,
    isLoading: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGGEDIN':
            state = { ...state, userSession: action.payload }
            break;
        case 'LOGOUT':
            state = { ...state, userSession: null }
            break;
        case 'LOADING_STARTED':
            state = { ...state, isLoading: true }
            break;
        case 'LOADING_COMPLETED':
            state = { ...state, isLoading: false }
            break;
        default:
            break;
    }

    return state;
}

export default reducer;