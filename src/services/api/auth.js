import { handleResponse, API } from './utils';

const auth = {
    signUp : async (body) => {
        let response = null
		try{
            await API.post('/user/register', body,{
                'Content-Type': 'application/json'
            })
            .then(function (res) {
                response = res
            })
            .catch(function (error) {
                response = error
            })
		}
		catch(e){
			response = e
		}
        return handleResponse(response);
    },
    login : async (body) => {
        let response = null
		try{
            await API.post('/user/login', body,{
                'Content-Type': 'application/json'
            })
            .then(function (res) {
                response = res
            })
            .catch(function (error) {
                response = error
            })
		}
		catch(e){
			response = e
		}
        return handleResponse(response);
    }
}

export default auth