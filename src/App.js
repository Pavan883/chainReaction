import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { simpleAction } from './actions/simpleActions';
import * as actions from './actions/simpleActions';
import Navigator from './components/navigator';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';

class App extends Component {
  simpleAction = (event) => {
 this.props.simpleAction();
}
  render() {
    console.log(this.props.simpleReducer);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Verizon Job Portal</h1>
        </header>
        <Navigator {...this.props}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
 ...state
});
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(actions.simpleAction()),
 setCredentials: (payload) => dispatch(actions.setCredentials(payload)),
 onSubmithandler: (payload) => dispatch(actions.onSubmithandler(payload)),
});

//const mapDispatchToProps = dispatch => (bindActionCreators({actions},dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(App);
