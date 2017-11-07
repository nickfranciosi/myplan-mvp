import React from 'react';
import styled from 'styled-components';

export default Header = ({ content }) => (
  <Header>
    <LogoText href="/">myplan</LogoText>
  </Header>
);

const LogoText = styled.a`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #717171;
  text-decoration: none;
  cursor: pointer;
`;

const Header = styled.header`
  border-bottom: 1px solid #E6E7E8;
  padding: 16px;
  margin-bottom: 20px;
`;