import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './banner.css';

export class Banner extends Component {
  socialLinks = [
    { icon: 'facebook-f', link: 'https://www.facebook.com/duyhung.do.3?ref=bookmarks' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/%C4%91%E1%BB%97-duy-h%C6%B0ng-8a840a70/' },
    { icon: 'skype', link: 'skype:live:duyhung0124' },
    { icon: 'github', link: 'https://github.com/hungduydo' },
    { icon: 'instagram', link: 'https://www.instagram.com/fun_house38/' },
  ];

  description = `I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer.`
  componentDidMount() {

  }

  render() {
    return (
      <div data-anchor="banner" className="banner">
        <div className="banner__wapper">
           <h1 className="banner__title">Hi! I'm Hung</h1>
        <p className="banner__desc">
          {this.description}
        </p>
        <p className="banner__social">
          {
            this.socialLinks.map(it => (<a href={it.link} target="#"><FontAwesomeIcon icon={['fab', it.icon]} /></a>))
          }
        </p>
        </div>
       
      </div>
    );
  }
}
