(this["webpackJsonpget-start"]=this["webpackJsonpget-start"]||[]).push([[4],{61:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(60),l=t.n(n),r=t(0),c=t.n(r),m=t(6),i=t(20),s=t(16),o=t(86);t(61);m.b.add(i.f,i.e),m.b.add(i.f,i.b),m.b.add(i.f,i.c),m.b.add(i.f,i.d);var u=function(){return c.a.createElement("div",{"data-anchor":"about",className:"about"},c.a.createElement("div",{className:"about__wapper"},c.a.createElement("div",{className:"about__picture"},c.a.createElement(o.a,{src:"https://i.imgur.com/2r4alu7t.jpg",roundedCircle:!0})),c.a.createElement("div",{className:"about__info"},c.a.createElement("div",{className:"info__tab"},c.a.createElement("h2",null,"About me"),c.a.createElement("p",null,"Have more than 7 years\u2019 experience in front-end developer, I have strong knowledge about Angular, JavaScript, Object Oriented Programming and Objective-C.")),c.a.createElement("div",{className:"info__tab"},c.a.createElement("h2",null,"Contact Details"),c.a.createElement("p",null,c.a.createElement("span",null,c.a.createElement(s.a,{icon:"user-circle"}),"Do Duy Hung"),c.a.createElement("span",null,c.a.createElement(s.a,{icon:"map-marker-alt"}),"80 Di\u1ec7p Minh Ch\xe2u, T\xe2n S\u01a1n Nh\xec, T\xe2n Ph\xfa, TPHCM"),c.a.createElement("span",null,c.a.createElement(s.a,{icon:"mobile"}),"0356 137 845"),c.a.createElement("span",null,c.a.createElement(s.a,{icon:"paper-plane"}),"duyhung01247@gmail.com"))))))},d=(t(62),function(){return c.a.createElement("div",{"data-anchor":"banner",className:"banner"},c.a.createElement("div",{className:"banner__wapper"},c.a.createElement("h1",{className:"banner__title"},"Hi! I'm Hung"),c.a.createElement("p",{className:"banner__desc"},"I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer."),c.a.createElement("p",{className:"banner__social"},[{icon:"facebook-f",link:"https://www.facebook.com/duyhung.do.3?ref=bookmarks"},{icon:"linkedin",link:"https://www.linkedin.com/in/%C4%91%E1%BB%97-duy-h%C6%B0ng-8a840a70/"},{icon:"skype",link:"skype:live:duyhung0124"},{icon:"github",link:"https://github.com/hungduydo"},{icon:"instagram",link:"https://www.instagram.com/fun_house38/"}].map((function(e,a){return c.a.createElement("a",{href:e.link,key:a,target:"#"},c.a.createElement(s.a,{icon:["fab",e.icon]}))})))))}),E=t(63),h=t(48),p=t(49),b=t(59),f=t(58),v=t(87),_=t(44),g=t(45),N=(t(64),t(65)),y=t.n(N).a.create({baseURL:"http://jsonplaceholder.typicode.com/"});function k(e){return"not implement"}var w=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"submitContact",value:function(e){return y.post("posts",{title:"test",body:"Test api only",userId:Math.round(100*Math.random())}).then((function(e){return e.data}),k)}}]),e}(),C=function(e){Object(b.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(E.a)({},t,l)),e.preventDefault()},n.handleSubmit=function(e){e.preventDefault();var a=n.state,t=a.name,l=a.subject,r=a.email,c=a.message;w.submitContact({name:t,subject:l,email:r,message:c}).then((function(e){e&&alert("Your message sent, i will contact soon")}))},n.state={name:"",email:"",subject:"",message:""},n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{"data-anchor":"contact",className:"contact"},c.a.createElement(v.a,null,c.a.createElement(_.a,{className:"contact__head"},c.a.createElement(g.a,{md:2},c.a.createElement(s.a,{icon:"envelope",size:"5x",color:"white"})),c.a.createElement(g.a,{md:10},"Feel free for contact me at email address or form below")),c.a.createElement(_.a,null,c.a.createElement(g.a,{md:8},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("fieldset",null,c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"contactName"},"Name ",c.a.createElement("span",{className:"required"},"*")),c.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,className:this.state.isNameValid})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"contactEmail"},"Email ",c.a.createElement("span",{className:"required"},"*")),c.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange,className:this.state.isEmailValid})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),c.a.createElement("input",{type:"text",name:"subject",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"contactMessage"},"Message ",c.a.createElement("span",{className:"required"},"*")),c.a.createElement("textarea",{cols:"30",rows:"6",name:"message",onChange:this.handleChange,className:this.state.isMessageValid})),c.a.createElement("div",null,c.a.createElement("button",{className:"submit"},"Submit"))))),c.a.createElement(g.a,{md:4}))))}}]),t}(r.Component),j=(t(83),t(84),function(e){Object(b.a)(t,e);var a=Object(f.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{"data-anchor":"works",className:"works"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"resume__item row"},c.a.createElement("div",{className:"col-md-4 resume__item__title"},c.a.createElement("h1",null,"Works")),c.a.createElement("div",{className:"col-md-8 resume__item__body"},c.a.createElement("div",null,c.a.createElement("h3",null,"B\u1ea1ch Tu\u1ed9c S\u1ed1"),c.a.createElement("div",{className:"item__info"},c.a.createElement("span",null,"Senior Front-end Developer"),c.a.createElement("span",null,"October 2017 - January 2020")),c.a.createElement("p",null,"An outsource company for Viet Nam market. Work with PM for get task, estimate and asign task for other member, review code and management develop branch, make website from design.")),c.a.createElement("div",null,c.a.createElement("h3",null,"Global Cybersoft JSC"),c.a.createElement("div",{className:"item__info"},c.a.createElement("span",null,"Senior Front-end Developer"),c.a.createElement("span",null,"August 2013 - September 2017")),c.a.createElement("p",null,"An outsource company consutant by Hitachi. ",c.a.createElement("br",null),"Work with customer for get task, self estimate and implament task, cross review code, self learn new technology.")),c.a.createElement("div",null,c.a.createElement("h3",null,"ABSoft"),c.a.createElement("div",{className:"item__info"},c.a.createElement("span",null,"IOS Developer"),c.a.createElement("span",null,"March 2012 - July 2013")),c.a.createElement("p",null,"An product company make application for Appstore. ",c.a.createElement("br",null),"Work with teamlead for get task, implament task, self learn new technology."))))))}}]),t}(r.Component)),S=(t(85),function(e){return c.a.createElement("li",{className:"skill__item"},c.a.createElement("em",null,e.name),c.a.createElement("span",{style:{width:"".concat(20*e.level,"%")}}))}),O=function(){return c.a.createElement("div",null,c.a.createElement("div",{"data-anchor":"resume",className:"resume"},c.a.createElement("div",{className:"resume__wapper container"},c.a.createElement("div",{className:"resume__item row"},c.a.createElement("div",{className:"col-md-4 resume__item__title"},c.a.createElement("h1",null,"Education")),c.a.createElement("div",{className:"col-md-8 resume__item__body"},c.a.createElement("div",null,c.a.createElement("h3",null,"University of Science HCM"),c.a.createElement("div",{className:"item__info"},c.a.createElement("span",null,"Infomation of technology"),c.a.createElement("span",null,"April 2007 - March 2012")),c.a.createElement("p",null,"Marjo Software Architech. Courses OOP, Database, Data Structure and Algorithms.")))),c.a.createElement("div",{className:"resume__item row"},c.a.createElement("div",{className:"col-md-4 resume__item__title"},c.a.createElement("h1",null,"Skills")),c.a.createElement("div",{className:"col-md-8 resume__item__body"},c.a.createElement("ul",{className:"skill"},c.a.createElement(S,{name:"Javascript",level:"4"}),c.a.createElement(S,{name:"Angular",level:"4"}),c.a.createElement(S,{name:"HTML/CSS",level:"5"}),c.a.createElement(S,{name:"Java",level:"3"}),c.a.createElement(S,{name:"Nodejs",level:"3"}),c.a.createElement(S,{name:"Git",level:"4"})))))),c.a.createElement(j,null))},M=function(e){new l.a("#container",{pips:!0,animation:700,delay:300,throttle:50,swipeThreshold:150,orientation:"vertical",freeScroll:!1})};a.default=function(){return Object(r.useEffect)((function(){M(void 0)})),c.a.createElement("div",{id:"container"},c.a.createElement(d,null),c.a.createElement(u,null),c.a.createElement(O,null),c.a.createElement(C,null))}}}]);
//# sourceMappingURL=4.0b9111c2.chunk.js.map