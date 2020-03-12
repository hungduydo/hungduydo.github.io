import React from 'react';
import { Image } from 'react-bootstrap';
import './about.css';

const About = () => {

    return (
      <div data-anchor="about" className="about">
        <div className="about__wapper">
          <div className="about__picture">
            <Image src="https://i.imgur.com/2r4alu7t.jpg" roundedCircle />
          </div>
          <div className="about__info">
            <div className="info__tab">
              <h2>About me</h2>
              <p>Have more than 7 years’ experience in front-end developer, I have strong knowledge about Angular, JavaScript, Object Oriented Programming and Objective-C.</p>
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

export default About;
