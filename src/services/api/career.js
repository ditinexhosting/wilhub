import {handleResponse, API, getToken} from './utils';

const career = {
  getCareers: async () => {
    let response = null;
    try {
      response = await API.get(`/career/65665`, {
        headers: {'Content-Type': 'application/json'},
      });
    } catch (e) {
      response = e;
    }
    return response;
  },
};

export default career;
