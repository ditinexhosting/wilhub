import home from './home';
import auth from './auth';
import blog from './blog';
import gallery from './gallery';
import addCourses from './addCourse';
import career from './career';
import zoomMetingLink from './zoomMetingLink';

import {SOCKET} from './utils';

const api = {
  ...auth,
  ...home,
  ...blog,
  ...gallery,
  ...addCourses,
  ...career,
  ...zoomMetingLink,
  SOCKET,
};
export default api;
