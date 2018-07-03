let initialState = {
  userProfileData:{},
  currentPage:"ProfileNavigator",
  currentProfilePage : "UserProfile",
  isUserLoggedIn : false,
  editForm: false,
  jobList:[{jobId:'007',jobName:'Agent',jobDesc:'Cannot be disclosed',jobSkills:'LOL',interviewDate:'3/7/2018',jobLocation:'Hyderabad'},
           {jobId:'008',jobName:'Henchman',jobDesc:'You dont want to know',jobSkills:'LOL',interviewDate:'4/7/2018',jobLocation:'village near Chennai'}]
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
      nextState.editForm = false;
      return nextState;
  case 'SET_USER_LOGGED_IN':
      nextState.isUserLoggedIn = action.payload;
      return nextState;
  case 'FORM_EDIT':
      nextState.editForm = true;
      return nextState;
  case 'SET_USER_PROFILE_VIEW':
      nextState.userProfileViewMode = action.payload;
      return nextState;



  default:
   return state
 }
}
