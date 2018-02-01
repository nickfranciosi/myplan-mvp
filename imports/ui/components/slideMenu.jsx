import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { slide as Menu } from 'react-burger-menu';

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: "26px",
    height: "22px",
    right: '16px',
    top: '16px'
  },
  bmBurgerBars: {
    background: '#949494',
    height: "4px",
  },
  bmCrossButton: {
    height: '26px',
    width: '26px'
  },
  bmCross: {
    background: '#949494'
  },
  bmMenu: {
    background: '#fff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMenuWrap: {
    top: 0,
  },
  bmMorphShape: {
    fill: '#949494'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    left: 0,
  }
}

const SlideMenu = ({ currentUser }) => (
  <Menu right styles={styles}>
    <a href="/">Home</a>
    <a href="#">How it works</a>
    <a href="#">Contact</a>
    {currentUser ? 
      <div>
        <a href={`/school/${currentUser._id}`}>Plans</a><br />
        <a href={`/admin`}>Admin</a><br />
        <a onClick={(e) => {
          e.preventDefault();
          Meteor.logout();
        }}>Sign Out</a>
      </div> 
    :
      <div>
        <a href="#">Sign In</a>
      </div>
    }
  </Menu>
);


export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    currentUser: Meteor.user(),
  };
})(SlideMenu);
