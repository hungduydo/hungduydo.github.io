import React, { Component } from 'react';
import './works.scss';

export class Works extends Component {
  
  componentDidMount() {
   
  }

  render() {
    return (
      <div data-anchor="works" className="works">
        <div className="container">
          <div className="resume__item row">
            <div className="col-md-4 resume__item__title">
              <h1>Works</h1>
            </div>
            <div className="col-md-8 resume__item__body">
              <div>
                <h3>Bạch Tuộc Số</h3>
                <div className="item__info"><span>Senior Front-end Developer</span><span>October 2017 - January 2020</span></div>
                <p>An outsource company for Viet Nam market. Work with PM for get task, estimate and asign task for other member, review code and management develop branch, make website from design.<br/> Projects: Oneway, Goodmorning, IfonePC, Kingcurrency. <br/>Skill gain: Angular 2+, Typescript, Javascript, HTML/CSS, Node.</p>
              </div>

              <div>
                <h3>Global Cybersoft JSC</h3>
                <div className="item__info"><span>Senior Front-end Developer</span><span>August 2013 - September 2017</span></div>
                <p>An outsource company consutant by Hitachi. <br/>Work with customer for get task, self estimate and implament task, cross review code, self learn new technology. <br/>Projects: Weather POC, eTaxi, Vidic, Bash Proshop, iHeart Radio . <br/>Skill gain: Java, Javascript, HTML/CSS, Spring MVC, Google Closure, Maven, Oracle, Mongodb, Apache Tomcat, Jenkin, Jira, Git.</p>
              </div>

              <div>
                <h3>ABSoft</h3>
                <div className="item__info"><span>IOS Developer</span><span>March 2012 - July 2013</span></div>
                <p>An product company make application for Appstore. <br/>Work with teamlead for get task, implament task, self learn new technology. <br/>Projects: Keycounter, Eagle Eye, Kurtulus Partners.<br/> Skill gain: Objective-C, SVN, Mac OS, iOS, Appstore.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
