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
