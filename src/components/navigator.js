import React, { Component } from 'react';
import LoginPage from './login';
class Navigator extends Component {

render(){
let currentPage;
switch(this.props.currentPage){
case "HomePage":
  currentPage = <LoginPage />;
}

return(<div>{currentPage}</div>);


}

}

export default Navigator;
