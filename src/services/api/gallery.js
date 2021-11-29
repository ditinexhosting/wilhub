import {handleResponse, API, getToken} from './utils';

const gallery = {
  getGallers: async () => {
    let response = null;
    try {
      response = await API.get(`/gallery/65665`, {
        headers: {'Content-Type': 'application/json'},
      });
    } catch (e) {
      response = e;
    }
    return response;
  },
};

export default gallery;
