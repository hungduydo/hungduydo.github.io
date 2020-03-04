import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  menuItems = ['Home', 'About', 'Resume', 'Works', 'Contact'];
  
  render() {
    return (<div className="header">
      <ul>
        {
          this.menuItems.map(item => <li>{item}</li>)
        }
      </ul>
    </div>)
  }
}
