import React from 'react';
import styled from 'styled-components';
import SlideMenu from '../components/slideMenu';
import AccountsUIWrapper from "./accountsUIWrapper";

export default Header = ({ content }) => (
  <Header>
    <LogoText href="/">myplan</LogoText>
    <AccountsUIWrapper />
    <SlideMenu />
    
  </Header>
);

const LogoText = styled.a`
  color: #717171;
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
  padding-right: 140px;
`;

const Header = styled.header`
  font-family: HelveticaNeue-Medium;
  border-bottom: 1px solid #E6E7E8;
  padding: 20px;
  position: relative;
  display: block;
  line-height: 0.9;

  font-size: 12px;
  color: #999;
`;

const Burger = styled.nav`
  width: 26px;
  height: 22px;
  display: inline-block;
  float: right;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Patty = styled.div`
  background: #949494;
  height: 4px;
  width: 100%;
  flex: 0 1 auto;
`;
