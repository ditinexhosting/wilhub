import home from './home';
import auth from './auth';
import blog from './blog';
import gallery from './gallery';
import addCourses from './addCourse';
import career from './career';
import zoomMetingLink from './zoomMetingLink';
import classApi from './classApi';
import activityApi from './activityApi';
import studyMaterialsApi from './studyMaterialsApi';
import libraryApi from './libraryApi';

import {SOCKET} from './utils';

const api = {
  ...auth,
  ...home,
  ...blog,
  ...gallery,
  ...addCourses,
  ...career,
  ...zoomMetingLink,
  ...classApi,
  ...activityApi,
  ...studyMaterialsApi,
  ...libraryApi,
  SOCKET,
};
export default api;
