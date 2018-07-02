export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: {val:'result_of_simple_action'}
 })
}

export const setCredentials = (payload) => dispatch => {
    /* api for user details */
    dispatch({
     type: 'SET_USER_PROFILE',
     payload: {val:'result_of_simple_action'}
    })
   }

export const setPassword = (payload) => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: payload
    })
   }   
   export const onSubmithandler = (payload) => dispatch => {
    dispatch({
     type: 'UPLOAD_TO_USER_PROFILE',
     payload: payload
    })
   }   
