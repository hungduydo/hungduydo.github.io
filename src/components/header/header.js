import React, { Component } from 'react';
import './header.scss';

export class Header extends Component {
  menuItems = [{ title: 'Home', ref: 'banner' }, { title: 'About', ref: 'about' }, { title: 'Resume', ref: 'resume' }, { title: 'Works', ref: 'works' }, { title: 'Contact', ref: 'contact' }];

  componentDidMount() {
    console.log(document.getElementsByTagName('li'));
  }

  render() {
    return (<div className="header">
      <ul>
        {
          this.menuItems.map((item, i) => <li key={i}><a href={`#${item.ref}`}>{item.title}</a></li>)
        }
      </ul>
    </div>)
  }
}
