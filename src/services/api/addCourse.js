import {API_URL} from '../../../src/config';
import axios from 'axios';

const addCourses = {
  addCourse: async body => {
    let response = null;
    try {
      await axios({
        method: 'post',
        url: `${API_URL}/course1/add`,
        data: body,
        mimeType: 'multipart/form-data',
      })
        .then(res => {
          response = res?.data;
        })
        .catch(error => {
          response = error;
        });
    } catch (e) {
      response = e;
    }
    return response;
  },
};

export default addCourses;
