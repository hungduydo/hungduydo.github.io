import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  menuItems = ['Home', 'About', 'Resume', 'Works', 'Contact'];
  
  componentDidMount() {
    console.log(document.getElementsByTagName('li'));
  }

  render() {
    return (<div className="header">
      <ul>
        {
          this.menuItems.map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>
    </div>)
  }
}
