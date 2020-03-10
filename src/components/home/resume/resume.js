import React, { Component } from 'react';
import './resume.scss';
export class Resume extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div data-anchor="resume" className="resume">
        <div className="resume__wapper container">
          <div className="resume__item row">
            <div className="col-md-4 resume__item__title">
              <h1>Education</h1>
            </div>
            <div className="col-md-8 resume__item__body">
              <div>
                <h3>University of Science HCM</h3>
                <div className="item__info"><span>Infomation of technology</span><span>April 2007 - March 2012</span></div>
                <p>Marjo Software Architech. Courses OOP, Database, Data Structure and Algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
