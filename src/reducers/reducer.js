let initialState = {
  userProfileData:{},
  currentPage:"UserProfile"
};
export default (state = initialState, action) => {
  let nextState = {...state}; 
 switch (action.type) {
  case 'SIMPLE_ACTION':
       nextState.userProfileData = action.payload;
      return nextState;
  case 'SET_USER_PROFILE':
      nextState.userProfileData = action.payload;
      return nextState;
  case 'SIMPLE_ACTION2':
      nextState.userProfileData = action.payload;
      return nextState;
  case 'UPLOAD_TO_USER_PROFILE':
      nextState.userProfileData = action.payload;
      return nextState;



  default:
   return state
 }
}
