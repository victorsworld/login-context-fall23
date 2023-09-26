export const submitLogin = async (dispatch, value) => {
    

    dispatch({
        type: "submit",
        payload: value
    })
}