import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.scss';

export class Contact extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div data-anchor="contact" className="contact">
        <Container>
          <Row>
            <Col md={2}><FontAwesomeIcon icon="envelope" size="5x" color="white" /></Col>
            <Col md={10}>Feel free for contact me at email address or form below</Col>
          </Row>
          <Row>
            <Col md={8}>
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label for="contactName">Name <span class="required">*</span></label><input type="text" size="35" id="contactName" name="contactName" value="" />
                  </div>
                  <div>
                    <label for="contactEmail">Email <span class="required">*</span></label><input type="text" size="35" id="contactEmail" name="contactEmail" value="" />
                  </div>
                  <div>
                    <label for="contactSubject">Subject</label><input type="text" size="35" id="contactSubject" name="contactSubject" value="" />
                  </div>
                  <div>
                    <label for="contactMessage">Message <span class="required">*</span></label><textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>
                  <div>
                    <button class="submit">Submit</button>
                  </div>
                </fieldset></form>
            </Col>
            <Col md={4}>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
