import React, { Component } from 'react';
import posed from 'react-pose';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { Home } from "../pages/home.js";
import { Contact } from "../pages/contact.js";
import { Work } from "../pages/work.js";
import { About } from "../pages/about.js";
import IntroText from "../components/intro";
import MaterialIcon from 'material-icons-react';

import firebase from "firebase/app";
import "firebase/database";

const MyLink = ({ title, to, onClick, routes }) => (
  <div className="Link-Container RedB No-Select White">
    <NavLink activeClassName="nav-active" exact to={to}>
      <NavOption className="item" onClick={onClick}>
         <span className="Nav-Font Any-Letter-Spacing">{title}</span>
      </NavOption>
    </NavLink>
  </div>
);


const FuncIcon = ({ size, funcOption, icon, classVal }) => (
    <div className={classVal}>
      <MaterialIcon icon={icon} onClick={funcOption} size={size} />
    </div>
)

export class App extends Component {
  state = { isOpen: false};

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDP_thhJKydd9oGN-VwnUipSV6GJV8pzi0",
      databaseURL: "https://duncanrocks.firebaseio.com/",
      projectId: "duncanrocks"
    };
    firebase.initializeApp(config);
  }


    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }));
    render() {
      const { isOpen } = this.state;

      return (
        <div>
          <IntroText/>
          <Router>
            <div id="Nav-Contain-ID">
              <div className="Main-Page-Container">
                <Route exact path="/" exact component={Home}  />
                <Route exact path="/home" component={Home}  />
                <Route exact path="/about/" component={About} />
                <Route exact path="/contact/" component={Contact} />
                <Route exact path="/mywork/" component={Work} />
              </div>
              <FuncIcon size='large' funcOption={this.toggle} icon="menu" classVal="clickable"/>

              <LeftOverlay className="Left-Fill" pose={isOpen ? 'open' : 'closed'}/>
              <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                <FuncIcon size='large' funcOption={this.toggle} icon="close" classVal="clickable clickable-menu-modifier"/>
                <MyLink title="HOME" to="/" onClick={this.toggle}/>
                <MyLink title="ABOUT" to="/about" onClick={this.toggle}/>
                <MyLink title="CONTACT" to="/contact" onClick={this.toggle}/>
                <MyLink title="MY WORK" to="/mywork" onClick={this.toggle}/>
              </Sidebar>
            </div>
            
          </Router>
        </div>
      );
    }
}




const LeftOverlay = posed.div({
  open:{
    delay:300,
    x: '-20%',
    transition:{
      duration:500,
    },
  },
  closed:{
    x:'-120%',
    delay:300,
    transition:{
      duration:500,
    },
  }
});

const Sidebar = posed.ul({
  open: {
    delay: 200,
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50,
    transition:{
      duration: 400,
    }
  },
  closed: {
    x: '200%',
    delay: 300,
    transition:{
      duration: 400,
    }
  },
   initialPose:'closed',
});
const NavOption = posed.li({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 200
    }
  },
  pressable: true,
  hoverable: true,
  hover: {
    scale: 0.95
  },
  init: { scale: 1 },
  press: { scale: 0.9 },
  closed: { y: 40, opacity: 0 },
});

