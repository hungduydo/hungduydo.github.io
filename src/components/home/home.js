import Pageable from 'pageable';
import React, { Component } from 'react';
import './home.css';
import { Banner, About, Resume, Works } from './index';

export class Home extends Component {
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
    return (
      <div id="container">
        <Banner></Banner>
        <About></About>
        <Resume></Resume>
        <Works></Works>
      </div>
    );
  }
}
