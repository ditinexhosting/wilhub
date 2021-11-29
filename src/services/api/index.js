import home from './home';
import auth from './auth';
import blog from './blog';
import gallery from './gallery';
import {SOCKET} from './utils';

const api = {
  ...auth,
  ...home,
  ...blog,
  ...gallery,
  SOCKET,
};
export default api;
