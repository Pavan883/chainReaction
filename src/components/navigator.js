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
  return(<div>
      <div>
        <ul style={{margin:'auto', width:'30%'}}>
          <li style={{display:'inline-block', float:'left'}}><div style={{border:'2px solid black', padding:'5px', margin:'5px', cursor: 'pointer'}}><a onClick={()=>this.props.setCurrentProfilePage("")}>My Profile</a></div></li>
          <li style={{display:'inline-block', float:'left'}}><div style={{border:'2px solid black', padding:'5px', margin:'5px', cursor: 'pointer'}}><a onClick={()=>this.props.setCurrentProfilePage("")}>Jobs Applied</a></div></li>
          <li style={{display:'inline-block', float:'left'}}><div style={{border:'2px solid black', padding:'5px', margin:'5px', cursor: 'pointer'}}><a onClick={()=>this.props.setCurrentProfilePage("")}>Apply For New Job</a></div></li>
        </ul>
      </div>
      <div style={{clear:'both'}}>{currentPage}</div></div>);
 }
}

export default Navigator;
