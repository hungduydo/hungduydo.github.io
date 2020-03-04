import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './app.css';
import Header from '../header/header';

class App extends Component {
  render() {
    return (<div className="app">
      <Header></Header>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/components/app/app.js</code> and save to reload all.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>)
  }
}

export default App;
