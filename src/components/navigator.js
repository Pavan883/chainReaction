import React, { Component } from 'react';
import LoginPage from './login';
import UserProfilePage from './userProfile';
import ProfileNavigator from './profileNavigator';
class Navigator extends Component {

render(){
let currentPage;
if (!this.props.simpleReducer.isUserLoggedIn){
  return <LoginPage {...this.props}/>;
}
switch(this.props.simpleReducer.currentPage){
    case "UserProfile":
      currentPage = <UserProfilePage {...this.props}/>;
      break;
    case "ProfileNavigator":
        currentPage = <ProfileNavigator {...this.props}/>;
      break;
    }
  return(currentPage);
 }
}

export default Navigator;
