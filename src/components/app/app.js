import React, { Component } from 'react';
import { Header, Home } from '../index';
import './app.css';

export default class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
    <div className="app">
      <Header></Header>
      <Home></Home>
    </div>
    );
  }
}
