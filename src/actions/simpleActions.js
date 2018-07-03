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
     payload: null
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

   export const editForm = () => dispatch => {
    dispatch({
     type: 'FORM_EDIT',
     payload: true
    })
   }

 export const setUserLoggedIn = () => dispatch => {
    dispatch({
     type: 'SET_USER_LOGGED_IN',
     payload: true
    })
   }

 export const setCurrentProfilePage = (payload) => dispatch => {
    dispatch({
     type: 'SET_CURRENT_PROFILE_PAGE',
     payload: payload
    })
   }
