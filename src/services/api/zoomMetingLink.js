import {handleResponse, API, getToken} from './utils';

const zoomMetingLink = {
  zoomMetingLink: async id => {
    let response = null;
    try {
      response = await API.get(`/user/video/live/${id}`, {
        headers: {'Content-Type': 'application/json'},
      });
    } catch (e) {
      response = e;
    }
    return response;
  },
};

export default zoomMetingLink;
