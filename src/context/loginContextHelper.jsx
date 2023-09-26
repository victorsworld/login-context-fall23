import Axios from '../lib/Axios' 
export const submitLogin = async (dispatch, value) => {

    let response = await Axios.post('/users/login-test', value)

    console.log(response);

    dispatch({
        type: "submit",
        payload: response.data
    })
}