import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './about.css';

export class About extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div data-anchor="about" className="about">
        <div className="about__wapper">
          <div className="about__picture">
            <Image src="https://i.imgur.com/2r4alu7t.jpg" roundedCircle />
          </div>
          <div className="about__info">
            <div className="info__tab">
              <h2>About me</h2>
              <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
            </div>
            <div className="info__tab">
              <h2>Contact Details</h2>
              <p>
                <span>Do Duy Hung</span>
                <span>80 Diệp Minh Châu, Tân Sơn Nhì, Tân Phú, TPHCM</span>
                <span>035-6137945</span>
                <span>duyhung01247@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
