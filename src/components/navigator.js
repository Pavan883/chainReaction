import React, { Component } from 'react';
import LoginPage from './login';
import UserProfilePage from './userProfile';
class Navigator extends Component {

render(){
let currentPage;
if (this.props.simpleReducer.userProfileData === null || Object.keys(this.props.simpleReducer.userProfileData).length === 0){
  return <LoginPage {...this.props}/>;
}
switch(this.props.simpleReducer.currentPage){
    case "UserProfile":
      currentPage = <UserProfilePage {...this.props}/>;
    }
  return(currentPage);
 }
}

export default Navigator;
