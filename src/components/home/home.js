import Pageable from 'pageable';
import React, { Component } from 'react';
import './home.css';
import { About, Banner, Contact, Resume } from './index';

export class Home extends Component {
  pages;
  componentDidMount() {
    this.initPagetable();
  }

  render() {
    return (
      <div id="container">
        <Banner></Banner>
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
      </div>
    );
  }

  initPagetable() {
    this.pages = new Pageable("#container", {
      pips: true,
      animation: 700,
      delay: 300,
      throttle: 50,
      swipeThreshold: 150,
      orientation: "vertical",
      freeScroll: true,
    });
  }
}
