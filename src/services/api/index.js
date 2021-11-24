import home from './home';
import auth from './auth';
import blog from './blog';
import {SOCKET} from './utils';

const api = {
  ...auth,
  ...home,
  ...blog,
  SOCKET,
};
export default api;
