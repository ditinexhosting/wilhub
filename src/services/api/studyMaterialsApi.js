import {handleResponse, API, getToken} from './utils';

const studyMaterialsApi = {
  studyMaterialsApi: async (userId, courseId, moduleName, subjectName) => {
    let response = null;
    try {
      response = await API.get(
        `/study/${userId}/${courseId}/${moduleName}/${subjectName}`,
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

export default studyMaterialsApi;
