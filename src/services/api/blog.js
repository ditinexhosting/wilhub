import {handleResponse, API, getToken} from './utils';

const blog = {
  getBlogs: async () => {
    let response = null;
    try {
      response = await API.get(`/blog/65665`, {
        headers: {'Content-Type': 'application/json'},
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};

export default blog;
