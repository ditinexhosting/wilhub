import {handleResponse, API, getToken} from './utils';

const classApi = {
  classApi: async (userId, courseId, moduleName, subjectName) => {
    let response = null;
    try {
      response = await API.get(
        `/class/${userId}/${courseId}/${moduleName}/${subjectName}`,
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
    } catch (e) {
      response = e;
    }
    return response;
  },
};

export default classApi;
