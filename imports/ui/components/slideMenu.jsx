import React from 'react';
import styled from 'styled-components';
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

class SlideMenu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  linkAction(event, route) {
    event.preventDefault();
    FlowRouter.go(route);
    this.setState({
      isOpen: false,
    })
  }

  handleLogOut(e) {
    e.preventDefault();
    Meteor.logout();
    FlowRouter.go("/");
  }

  render(){
    const { currentUser } = this.props;
    return(
      <Menu right styles={styles} isOpen={this.state.isOpen}>
        <MenuLink onClick={(e) => this.linkAction(e, "/")}>Home</MenuLink>
        <MenuLink onClick={(e) => this.linkAction(e, "/how-it-works")}>How it works</MenuLink>
        <MenuLink onClick={(e) => this.linkAction(e, "/contact")}>Contact</MenuLink>
        {currentUser ?
          <UserLinkContainer>
            <SchoolName>{currentUser.school.name}</SchoolName>
            <MenuLink onClick={(e) => this.linkAction(e, `/school/${currentUser._id}`)}>Plans</MenuLink>
            <MenuLink onClick={(e) => this.linkAction(e, "/admin")}>Admin</MenuLink>
            <MenuLink onClick={this.handleLogOut}>Sign Out</MenuLink>
          </UserLinkContainer>
          :
          <div>
            <MenuLink onClick={(e) => this.linkAction(e, "/signin")}>Sign In</MenuLink>
          </div>
        }
      </Menu>
    )
  }
}


const MenuLink = styled.p`
  color: #4A4A4A;
  display: block;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 32px;
`;

const SchoolName = styled.p`
  font-family: HelveticaNeue;
  color: #6C6C6C;
  font-size: 16px;
  margin-bottom: 32px;
`;

const UserLinkContainer = styled.div`
  border-top: 1px solid #CDCDCD;
  padding-top: 16px;
`;



export default withTracker(props => {
  Meteor.subscribe('plans');
  return {
    currentUser: Meteor.user(),
  };
})(SlideMenu);
