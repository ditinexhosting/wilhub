import home from './home';
import auth from './auth';
import blog from './blog';
import gallery from './gallery';
import addCourses from './addCourse';
import {SOCKET} from './utils';

const api = {
  ...auth,
  ...home,
  ...blog,
  ...gallery,
  ...addCourses,
  SOCKET,
};
export default api;
