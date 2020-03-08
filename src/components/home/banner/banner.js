import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './banner.css';

export class Banner extends Component {
  socialLinks = [
    { icon: 'facebook-f', link: 'http://facebook.com' },
    { icon: 'linkedin', link: 'http://facebook.com' },
    { icon: 'skype', link: 'http://facebook.com' },
    { icon: 'github', link: 'http://facebook.com' },
    { icon: 'twitter', link: 'http://facebook.com' },
  ];

  description = `I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer.`
  componentDidMount() {

  }

  render() {
    return (
      <div data-anchor="Page 1" className="banner">
        <div className="banner__wapper">
           <h1 className="banner__title">Hi! I'm Hung</h1>
        <p className="banner__desc">
          {this.description}
        </p>
        <p className="banner__social">
          {
            this.socialLinks.map(it => (<a href={it.link}><FontAwesomeIcon icon={['fab', it.icon]} /></a>))
          }
        </p>
        </div>
       
      </div>
    );
  }
}
