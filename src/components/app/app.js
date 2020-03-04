import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './app.css';
import Pageable from 'pageable';
import Header from '../header/header';

export default class App extends Component {
  pages;
  componentDidMount() {
    this.pages = new Pageable("#container", {
      pips: true,
      animation: 300,
      delay: 0,
      throttle: 50,
      swipeThreshold: 50,
      orientation: "vertical",
      freeScroll: false,
    });
  }

  render() {
    return (<div className="app">
      <Header></Header>
      <div id="container">
        <div data-anchor="Page 1"></div>
        <div data-anchor="Page 2"></div>
        <div data-anchor="Page 3"></div>
        <div data-anchor="Page 4"></div>
      </div>
    </div>)
  }
}
