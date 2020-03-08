import React, { Component } from 'react';
import { Header, Home } from '../index';
import './app.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

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
