export const loggedin = payload => {
  return {
    type: 'LOGGEDIN',
    payload,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const loadingStarted = () => {
  return {
    type: 'LOADING_STARTED',
  };
};

export const loadingCompleted = () => {
  return {
    type: 'LOADING_COMPLETED',
  };
};

export const checkIsApplyToLogin = () => {
  return {
    type: 'APPLY_TO_LOGIN',
  };
};

export const afterIsApplyToLogin = () => {
  return {
    type: 'AFFTER_APPLY_TO_LOGIN',
  };
};

export const courseDetails = payload => {
  return {
    type: 'COURSE_DETAILS',
    payload,
  };
};

export const selectedRecordSession = payload => {
  return {
    type: 'SELECT_RECORD',
    payload,
  };
};
