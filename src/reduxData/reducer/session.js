const initialState = {
  userSession: null,
  isLoading: false,
  isApplyToLogin: false,
  selectedCourse: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGEDIN':
      state = {...state, userSession: action.payload};
      break;
    case 'LOGOUT':
      state = {...state, userSession: null};
      break;
    case 'LOADING_STARTED':
      state = {...state, isLoading: true};
      break;
    case 'LOADING_COMPLETED':
      state = {...state, isLoading: false};
      break;
    case 'APPLY_TO_LOGIN':
      state = {...state, isApplyToLogin: true};
      break;
    case 'AFFTER_APPLY_TO_LOGIN':
      state = {...state, isApplyToLogin: false};
      break;
    case 'COURSE_DETAILS':
      state = {...state, selectedCourse: action.payload};
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
