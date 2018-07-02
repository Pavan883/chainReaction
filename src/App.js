import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleActions';
import Navigator from './components/navigator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  simpleAction = (event) => {
 this.props.simpleAction();
}
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <Navigator currentPage = "HomePage"/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
 ...state
});
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
